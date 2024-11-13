import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LovService } from '../../services/lov.service';

@Component({
  selector: 'app-make-invoice',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './make-invoice.component.html',
  styleUrls: ['./make-invoice.component.scss']
})

export class MakeInvoiceComponent implements OnInit {
  customerName: string = '';
  companyName: string = '';
  items: any[] = [];
  totalAmount: number = 0;
  invoiceStatuses: any[] = [];
  paymentTypes: any[] = [];
  itemCategories: any[] = [];
  countries: any[] = [];

  selectedInvoiceStatus: string = '';
  selectedPaymentType: string = '';
  selectedItemCategory: string = '';
  selectedCountry: string = '';

  constructor(private lovService: LovService) {}

  ngOnInit(): void {
    // Populate LOVs
    this.invoiceStatuses = this.lovService.getInvoiceStatuses();
    this.paymentTypes = this.lovService.getPaymentTypes();
    this.itemCategories = this.lovService.getItemCategories();
    this.countries = this.lovService.getCountries();
  }

  onAddItem(description: string, quantity: number, price: number) {
    const item = { description, quantity, price, total: quantity * price };
    this.items.push(item);
    this.totalAmount += item.total;
  }

  onSave() {
    const invoice = {
      customerName: this.customerName,
      companyName: this.companyName,
      items: this.items,
      totalAmount: this.totalAmount,
      invoiceStatus: this.selectedInvoiceStatus,
      paymentType: this.selectedPaymentType,
      itemCategory: this.selectedItemCategory,
      country: this.selectedCountry
    };

    // Save invoice to localStorage (or send to the server)
    alert('Invoice saved successfully');
  }
}
