import {Account} from "./account.model";

export class ExtendedBalance {
  isCreditEnabled: boolean;
  limit?: string;
  personal?: string;
  creditLeft?: string;
  balance?: string;

  constructor(details: Account) {
    const balance = details.balances[0].amount.amount;
    const currency = details.balances[0].amount.currency;
    const limit = Number(details.creditLimit);

    this.isCreditEnabled = details.creditLimit > 0;
    console.log("CREDIT ENABLED? ", this.isCreditEnabled)
    this.limit = String(limit).concat(" ").concat(currency);
    this.balance = String(this.isCreditEnabled ? balance + limit : balance).concat(" ").concat(currency);

    if (this.isCreditEnabled) {
      this.personal = String(balance < 0 ? 0 : balance)
        .concat(" ").concat(currency);

      this.creditLeft = String(balance < 0 ? limit + balance : limit)
        .concat(" ").concat(currency);
    }
  }
}
