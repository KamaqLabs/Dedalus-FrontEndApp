import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Hotel} from '../models/hotel.entity';
import {CreateHotelRequest} from '../models/create-hotel.request';

@Injectable({
  providedIn: 'root'
})
export class HotelService extends BaseService<Hotel>{

  constructor() {
    super();
    this.resourceEndpoint = 'hotel/hotels';
  }

  public getHotelById(hotelId: number) {
    return this.http.get<Hotel>(`${this.basePath}${this.resourceEndpoint}/${hotelId}`, this.httpOptions);
  }

  public createHotel(hotelReQuest: CreateHotelRequest) {
    return this.http.post<Hotel>(`${this.basePath}${this.resourceEndpoint}`, JSON.stringify(hotelReQuest), this.httpOptions);
  }

  public updateHotel(hotel:Hotel) {
   return this.update(hotel,hotel.id);
  }

}
