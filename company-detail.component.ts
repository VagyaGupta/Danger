
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})



export class CompanyDetailComponent implements OnInit {
  companyName: string = '';
  companyAddress: string = '';

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  onSave() {
    const company = { name: this.companyName, address: this.companyAddress };
    this.companyService.addCompany(company).subscribe(response => {
      alert('Company saved');
    });
  }
}


