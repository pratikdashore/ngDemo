import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-components',
  template: `<h3> Nested-components! </h3>
              <app-customers-list></app-customers-list>
              `
})
export class NestedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
