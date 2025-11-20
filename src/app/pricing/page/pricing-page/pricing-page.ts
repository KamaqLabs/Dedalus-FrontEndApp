import { Component } from '@angular/core';
import {Pricing} from '../../components/pricing/pricing';

@Component({
  selector: 'app-pricing-page',
  imports: [
    Pricing
  ],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css'
})
export class PricingPage {

}
