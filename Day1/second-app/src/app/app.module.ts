import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { AppTeamInfoComponent } from './app-team-info/app-team-info.component';
import { RoutingComponent } from './routing/routing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ProductsComponent } from './products/products.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { Cust1Component } from './cust1/cust1.component';
import { AsyncpipeexComponent } from './asyncpipeex/asyncpipeex.component';
import { Cust2Component } from './cust2/cust2.component';
import { HomeComponent } from './home/home.component';
import { CubePipe } from './cube.pipe';
import { DataPipe } from './data.pipe';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { DisplayComponent } from './product/display/display.component';
import { RegisterComponent } from './product/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    AppTeamInfoComponent,
    RoutingComponent,
    NavigationComponent,
    PipeExampleComponent,
    ProductsComponent,
    EmpListComponent,
    EmpDetailComponent,
    Cust1Component,
    AsyncpipeexComponent,
    Cust2Component,
    HomeComponent,
    CubePipe, 
    DataPipe, ServiceExampleComponent, ProductShowcaseComponent, DisplayComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
