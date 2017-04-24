import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>();

  moveLeft() {
    this.shift.emit(-1);
  }

  moveRight() {
    this.shift.emit(1);
  }


  constructor() { }

  ngOnInit() {
  }

}
