import { Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { MakeInvoiceComponent } from './make-invoice/make-invoice.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../services/authguard.guard';
import { RouterOutlet } from '@angular/router';



export const routes: Routes = [
    
        { path: '', redirectTo: '/invoices', pathMatch: 'full' },
        { path: 'invoices', component: InvoiceListComponent, canActivate:[AuthGuard]},
        { path: 'customer-detail', component: CustomerDetailComponent, canActivate: [AuthGuard] },
        { path: 'company-detail', component: CompanyDetailComponent, canActivate: [AuthGuard] },
        { path: 'make-invoice', component: MakeInvoiceComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent},
      ];
  
   
      export class AppRoutingModule { }