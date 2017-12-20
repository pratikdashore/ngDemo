import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;
  @Output() shiftC = new EventEmitter<number>();

  moveLeft() {
    this.shiftC.emit(-1);
  }

  moveRight() {
    this.shiftC.emit(1);
  }


  constructor() { }

  ngOnInit() {
  }

}
