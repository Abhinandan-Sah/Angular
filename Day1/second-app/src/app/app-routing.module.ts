import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppTeamInfoComponent } from './app-team-info/app-team-info.component';
import { RoutingComponent } from './routing/routing.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ProductsComponent } from './products/products.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { Cust1Component } from './cust1/cust1.component';
import { Cust2Component } from './cust2/cust2.component';
import { AsyncpipeexComponent } from './asyncpipeex/asyncpipeex.component';
import { HomeComponent } from './home/home.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';

const routes: Routes = [
  // {path: '', redirectTo: '/cust1', pathMatch: 'full'},
  {path: '', component: HomeComponent, title: "Home Page"},
  {path: 'student', component: StudentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'team', component: AppTeamInfoComponent},
  {path: 'routing', component: RoutingComponent},
  {path: 'pipe', component: PipeExampleComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'emplist', component: EmpListComponent},
  {path: 'emp/:id', component: EmpDetailComponent},
  {path: 'cust1', component: Cust1Component},
  {path: 'cust2', component: Cust2Component},
  {path: 'apipe', component: AsyncpipeexComponent},
  {path:'srv', component: ServiceExampleComponent},
  {path:'productwork', component: ProductShowcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
