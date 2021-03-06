import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PaymentAuthorizeResponse } from '../../api/models/payment-authorize-response';
import { ShareDataService } from '../../common/services/share-data.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {
  public authResponse: PaymentAuthorizeResponse;
  private subscriptions: Subscription[] = [];

  constructor(private sharedService: ShareDataService) {}

  ngOnInit() {
    this.sharedService.currentData.subscribe(
      (authResponse) => (this.authResponse = authResponse)
    );
  }

  get totalAmount(): number {
    if (!this.authResponse || !this.authResponse.payment) {
      return 0;
    }
    let totalAmount = 0;
    this.authResponse.payment.targets.forEach((payment) => {
      totalAmount = totalAmount + payment.instructedAmount.amount;
    });
    return Math.round(totalAmount * 100) / 100;
  }
}
