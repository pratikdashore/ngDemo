import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imgSrc = 'favicon.ico';
  color = 'red';
  constructor() { }

  ngOnInit() {
  }

}
