import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from '../../../public/services/session-storage.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css'
})
export class DashboardPage implements OnInit {
    constructor(
      private sessionService: SessionStorageService,
      private administratorProfileService: SessionStorageService,
    ) {}
    ngOnInit(): void {
      console.log(this.sessionService.get("profile"));
    }
}
