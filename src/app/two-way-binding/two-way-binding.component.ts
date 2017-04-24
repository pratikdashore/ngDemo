import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  name = 'Pratik Dashore';


  street = 'Manik Chand Vajpai Road';
  city = 'Indore';
  region = 'north';

  changeRegion(region) {
    this.region = region;
  }
  constructor() { }

  ngOnInit() {
  }

}
