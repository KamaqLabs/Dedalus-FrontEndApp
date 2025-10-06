import { Component } from '@angular/core';
import {SessionStorageService} from '../../services/session-storage.service';

@Component({
  selector: 'app-tool-bar',
  imports: [],
  templateUrl: './tool-bar.html',
  styleUrl: './tool-bar.css'
})
export class ToolBar {
  constructor(private sessionStorageService: SessionStorageService) {}

  isAuthenticated(): boolean {
    return this.sessionStorageService.get<boolean>('isAuthenticated') === true;
  }
}
