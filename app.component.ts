import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { LoginComponent } from './login/login.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MakeInvoiceComponent } from './make-invoice/make-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AuthComponent } from './auth/auth.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterModule, CompanyDetailComponent,LoginComponent,AuthComponent,CustomerDetailComponent,InvoiceListComponent,MakeInvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invoice-generator';
}
