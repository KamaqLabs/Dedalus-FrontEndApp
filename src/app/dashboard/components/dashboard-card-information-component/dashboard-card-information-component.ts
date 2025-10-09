import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon'

@Component({
  selector: 'app-dashboard-card-information-component',
  imports: [
    MatIcon
  ],
  templateUrl: './dashboard-card-information-component.html',
  styleUrl: './dashboard-card-information-component.css'
})
export class DashboardCardInformationComponent {

  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() link!: string;

  constructor(
    private router: Router
  ) {
  }


  goToLink() {
    if (this.link) {
      this.router.navigate([this.link]);
    }
  }
}
