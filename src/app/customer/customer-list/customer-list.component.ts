import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  constructor(public customerService : CustomerService) { }

  ngOnInit() {
    if(localStorage.getItem("customers")){
      this.customerService.customers = JSON.parse(localStorage.getItem("customers"))
    }
  }

}
