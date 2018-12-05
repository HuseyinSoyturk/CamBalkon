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

  onClickButton(){
    let customer = { id:localStorage.customerId , name:'TOM' , adres:'Yakuplu/İSTANBUL' , tel:'05429876543' , fax:'05429876543'}
    this.customerService.customers.push(customer)
    localStorage.customers = JSON.stringify(this.customerService.customers) 
    localStorage.customerId++ ;
  }

}
