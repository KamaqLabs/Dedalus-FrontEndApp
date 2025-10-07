import { Component } from '@angular/core';
import {CreateHotelForm} from '../../components/create-hotel-form/create-hotel-form';

@Component({
  selector: 'app-create-hotel-page',
  imports: [
    CreateHotelForm
  ],
  templateUrl: './create-hotel-page.html',
  styleUrl: './create-hotel-page.css'
})
export class CreateHotelPage {

}
