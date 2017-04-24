import { Component, OnInit } from '@angular/core';
import { Address, Customer } from '../models/customer';


@Component({
  selector: 'app-model-binding',
  templateUrl: './model-binding.component.html',
  styleUrls: ['./model-binding.component.css']
})
export class ModelBindingComponent implements OnInit {

  customer: Customer = {
    id: 1,
    name: 'Pratik',
    address: {
      city: 'indore',
      street: 'Ring Road',
      region: 'east'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
