import { Component, OnInit } from '@angular/core';
import { Customer } from "../models/customer.model";
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  title = 'Customer Issue List' ;


  customers: Customer;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {

    this.customerService.getCustomer()
      .subscribe( data => {
        this.customers = data ; 
        console.log(this.customers);
      });
  }

}
