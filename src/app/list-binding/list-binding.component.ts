import { Component, OnInit } from '@angular/core';
import { Address, Customer, Customers } from '../models/customer';
import { Option } from '../models/option';

@Component({
  selector: 'app-list-binding',
  templateUrl: './list-binding.component.html',
  styleUrls: ['./list-binding.component.css']
})
export class ListBindingComponent implements OnInit {

  regions: Option[] = [
    { id: 1, text: 'East', desc: 'East', value: 'east' },
    { id: 2, text: 'West', desc: 'West', value: 'west' },
    { id: 3, text: 'North', desc: 'North', value: 'north' },
    { id: 4, text: 'South', desc: 'South', value: 'south' }
  ];

  customers: Customer[] = Customers;


  customer: Customer;
  constructor() { }

  ngOnInit() {
  }

}
