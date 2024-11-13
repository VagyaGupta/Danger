import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LovService {

  constructor() { }

  // Example of LOV for invoice statuses (could be expanded)
  getInvoiceStatuses() {
    return [
      { code: 'PENDING', description: 'Pending' },
      { code: 'PAID', description: 'Paid' },
      { code: 'CANCELLED', description: 'Cancelled' }
    ];
  }

  // Example LOV for payment types
  getPaymentTypes() {
    return [
      { code: 'CREDIT_CARD', description: 'Credit Card' },
      { code: 'BANK_TRANSFER', description: 'Bank Transfer' },
      { code: 'CASH', description: 'Cash' }
    ];
  }

  // Example LOV for item categories
  getItemCategories() {
    return [
      { code: 'PRODUCT', description: 'Product' },
      { code: 'SERVICE', description: 'Service' }
    ];
  }

  // Example LOV for countries
  getCountries() {
    return [
      { code: 'US', description: 'United States' },
      { code: 'IN', description: 'India' },
      { code: 'GB', description: 'United Kingdom' }
    ];
  }
}



