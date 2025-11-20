import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-pricing',
  imports: [
    MatCardContent,
    MatCard,
    MatButton
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
  constructor(private router: Router) {}

  onRegister(): void {
    this.router.navigate(['/create-hotel']);
  }
}
