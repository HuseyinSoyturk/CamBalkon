import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers : Array<Object> = [];
  constructor() { }
}
