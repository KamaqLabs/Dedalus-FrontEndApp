import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-snackbar',
  imports: [],
  templateUrl: './error-snackbar.html',
  styleUrl: './error-snackbar.css'
})
export class ErrorSnackbar {
  @Input() message: string = '';
  @Input() duration: number = 3000;
  visible: boolean = false;

  ngOnInit(): void {
    this.visible = true;
    setTimeout(() => this.visible = false, this.duration);
  }
}
