
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})

  export class CustomerDetailComponent implements OnInit {
    customerName: string = '';
    customerEmail: string = '';
  
    constructor(private customerService: CustomerService) {}
  
    ngOnInit(): void {}
  
    onSave() {
      const customer = { name: this.customerName, email: this.customerEmail };
      this.customerService.addCustomer(customer).subscribe(response => {
        alert('Customer saved');
      });
    }
  
  
}
