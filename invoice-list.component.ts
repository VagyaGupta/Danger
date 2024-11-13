import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-invoice-list',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(invoices => {
      this.invoices = invoices.map(invoice => ({
        ...invoice,
        totalAmount: this.utilsService.formatCurrency(invoice.totalAmount)  // Format total amount
      }));
    });
  }
}
