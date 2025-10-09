import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-class-card-component',
  templateUrl: './room-class-card-component.html',
  styleUrls: ['./room-class-card-component.css']
})
export class RoomClassCardComponent {


  @Input() roomClassName!: string;
  @Input() maxOccupancy!: number;
  @Input() defaultPricePerNight!: number;
  @Input() description!: string;

  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
