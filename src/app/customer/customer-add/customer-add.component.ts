import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(public customerService : CustomerService) { }

  ngOnInit() {
    
  }

  onClickButton(){
      this.customerService.customers.push("Jumanji")
      localStorage.customers = JSON.stringify(this.customerService.customers) 
  }

}