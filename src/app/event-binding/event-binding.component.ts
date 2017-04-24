import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  color = 'red';
  hideAddress = false;

  toggleAddress() {
    this.hideAddress = !this.hideAddress;
  }

  toggleColor() {
    this.color = this.color === 'red' ? 'green' : 'red';
  }

  changeColor(color) {
    this.color = color;
  }

  constructor() { }

  ngOnInit() {
  }

}
