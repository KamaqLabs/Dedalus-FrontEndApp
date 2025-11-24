import {Injectable} from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: Socket;

  constructor() {
    // ⚠️ Cambia la URL al host donde corre Flask
    this.socket = io('ws://localhost:5000', {
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('✅ Conectado al WebSocket');
    });

    this.socket.on('disconnect', () => {
      console.log('❌ Desconectado del WebSocket');
    });
  }

  /**
   * Escucha todos los mensajes emitidos por Flask bajo "new_data"
   * y filtra por topic.
   */
  listenToTopic(topic: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on('new_data', (msg: any) => {
        if (msg.topic === topic) {
          observer.next(msg.payload);
        }
      });
    });
  }

  /**
   * Opción: escuchar todo sin filtrar
   */
  listenAll(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('new_data', (msg: any) => {
        observer.next(msg);
      });
    });
  }

  /**
  trae todo, sin filtrar v2
  */

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

}
