import { Component, Input } from '@angular/core';
import { Option } from '../../models/option';
import { Address } from '../../models/customer';


@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent {

  regions: Option[] = [
    { id: 1, text: 'East', desc: 'East', value: 'east' },
    { id: 2, text: 'West', desc: 'West', value: 'west' },
    { id: 3, text: 'North', desc: 'North', value: 'north' },
    { id: 4, text: 'South', desc: 'South', value: 'south' }
  ];

  @Input() address: Address;

}
