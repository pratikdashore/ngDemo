import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Option } from '../../models/option';
import { DataService } from '../../services/data.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  customer: Customer;

  constructor(private dataService: DataService, private loggerService: LoggerService) {
  }

  ngOnInit() {
    //this.getCustomers();
    this.getCustomersAsObeservable();
  }

  getCustomers() {
    this.loggerService.log('Calling service to get customers');
    this.dataService.getCustomersWithPromise().then(value => {
      this.customers = value;
      this.loggerService.log('Got customers from promise');
    });
  }

  getCustomersAsObeservable() {
    this.loggerService.log('Calling service to get customers from Observable');
    this.dataService.getCustomersWithObservable().subscribe(value => {
      this.customers = value;
      this.loggerService.log('Got customers from Observable');
    });
  }

  shift(incrementor: number) {
    let idx = this.customers.findIndex(cust => cust === this.customer) + incrementor;
    idx = Math.min(this.customers.length - 1, Math.max(0, idx));
    this.customer = this.customers[idx];
  }

}
