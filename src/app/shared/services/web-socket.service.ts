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
  trae todo, sin filtrar v2
  */

  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
