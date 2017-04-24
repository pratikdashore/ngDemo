import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';


import { Customers, Customer } from '../models/customer';
import { LoggerService } from './logger.service';
@Injectable()
export class DataService {

  constructor(private loggerService: LoggerService) {

  }

  getCustomers(): Customer[] {
    this.loggerService.log('This will return ' + Customers.length + ' Customers');
    return Customers;
  }

  getCustomersWithPromise(): Promise<Customer[]> {
    this.loggerService.log('Getting customers Data with promise');
    return new Promise<Customer[]>(resolve => {
      setTimeout(() => {
        this.loggerService.log('Resolving Promise');
        return resolve(Customers);
      }, 3000);
    });
  }

  getCustomersWithObservable(): Observable<Customer[]> {
    this.loggerService.log('Getting customers Data as an Observable');
    return of(Customers)
      .delay(2000)
      .do(() => {
        this.loggerService.log('Resolving Observable');
      }, () => {
        this.loggerService.log('Error in Observable');
      });
  }

}
