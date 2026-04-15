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

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    AppTeamInfoComponent,
    RoutingComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, StudentComponent, EmployeeComponent, AppTeamInfoComponent, RoutingComponent, NavigationComponent]
})
export class AppModule { }
