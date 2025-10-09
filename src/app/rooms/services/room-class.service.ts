import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {RoomClass} from '../models/room-class.entity';
import {CreateRoomClassRequest} from '../models/create-room-class-request';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomClassService extends BaseService<RoomClass>{

  private roomClassesSubject = new BehaviorSubject<RoomClass[]>([]);
  public roomClasses$ = this.roomClassesSubject.asObservable();

  constructor() {
    super();
    this.resourceEndpoint = 'hotels/room/RoomClasses';
  }

  public loadRoomClasses(hotelId: number): void {
    this.GetRoomClassesByHotelId(hotelId).subscribe(roomClasses => {
      this.roomClassesSubject.next(roomClasses);
    });
  }

  public CreateRoomClass(roomClassRequest: CreateRoomClassRequest, hotelId: number): Observable<RoomClass> {
    return this.http.post<RoomClass>(
      `${this.basePath}${this.resourceEndpoint}/${hotelId}`,
      JSON.stringify(roomClassRequest),
      { ...this.httpOptions, withCredentials: true }
    ).pipe(
      tap((newRoomClass: RoomClass) => {
        const current = this.roomClassesSubject.value;
        this.roomClassesSubject.next([...current, newRoomClass]);
      })
    );
  }

  public DeleteRoomClass(roomClassId: number): Observable<any> {
    return this.http.delete<any>(
      `${this.basePath}${this.resourceEndpoint}/delete/${roomClassId}`,
      { ...this.httpOptions, withCredentials: true }
    ).pipe(
      tap(() => {
        const current = this.roomClassesSubject.value;
        this.roomClassesSubject.next(current.filter(rc => rc.id !== roomClassId));
      })
    );
  }

  public GetRoomClassesByHotelId(hotelId: number): Observable<RoomClass[]> {
    return this.http.get<any[]>(
      `${this.basePath}${this.resourceEndpoint}/ByHotelId/${hotelId}`,
      { ...this.httpOptions, withCredentials: true }
    ).pipe(
      map((roomClasses: any[]) => roomClasses.map(rc => ({
        ...rc,
        defaultPricePerNight: Number(rc.defaultPricePerNight)
      })))
    );
  }

}
