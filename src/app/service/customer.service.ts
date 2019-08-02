import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from "../models/customer.model";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) {}

  //private customerUrl = 'http://localhost:8002/customerIssue';
  //private userUrl = '/api';

  public getCustomer() {
    return this.http.get<Customer>('http://localhost:8002/customerIssue/getCustomer');
  }


  public addCustomer(customer) {
    return this.http.post<Customer>('http://localhost:8002/customerIssue/addCustomer',customer);
  }

}

