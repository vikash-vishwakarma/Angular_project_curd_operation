import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from "../models/customer.model";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'Customer Issue';
  customer: Customer = new Customer();

  constructor(private router: Router, private customerService: CustomerService) {

  }

  addCustomer(f:NgForm): void {
    this.customerService.addCustomer(this.customer)
    
        .subscribe( data => {
          alert("Customer issue created successfully.");
         
        });
        f.resetForm();
      };
}
