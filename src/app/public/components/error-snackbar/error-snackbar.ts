import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-error-snackbar',
  imports: [],
  templateUrl: './error-snackbar.html',
  styleUrl: './error-snackbar.css'
})
export class ErrorSnackbar {
  visible = signal(false);
  snackbarId = 0;
  private _message = '';

  @Input()
  set message(val: string) {
    this._message = val;
    if (val) {
      this.snackbarId++; // Fuerza el reinicio del bloque
      this.visible.set(false);
      setTimeout(() => {
        this.visible.set(true);
        setTimeout(() => this.visible.set(false), 3000);
      }, 10);
    }
  }
  get message() {
    return this._message;
  }
}
