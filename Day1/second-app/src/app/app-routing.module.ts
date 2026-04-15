import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppTeamInfoComponent } from './app-team-info/app-team-info.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'team', component: AppTeamInfoComponent},
  {path: 'routing', component: RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
