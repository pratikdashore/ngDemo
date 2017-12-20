import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ModelBindingComponent } from './model-binding/model-binding.component';
import { ListBindingComponent } from './list-binding/list-binding.component';
import { NestedComponentsComponent } from './nested-components/nested-components.component';
import { CustomersListComponent } from './nested-components/customers-list/customers-list.component';
import { CustomerDetailComponent } from './nested-components/customer-detail/customer-detail.component';
import { CustomerAddressComponent } from './nested-components/customer-address/customer-address.component';
import { DataService } from './services/data.service';
import { LoggerService } from './services/logger.service';
import { TestPipe } from './pipes/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ModelBindingComponent,
    ListBindingComponent,
    NestedComponentsComponent,
    CustomersListComponent,
    CustomerDetailComponent,
    CustomerAddressComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
