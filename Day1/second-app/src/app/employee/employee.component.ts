import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  emps:any=[
    {eid:1, ename: 'sam', esalary: 96000.75, edoj:'11/23/2025'}, 
    {eid:2, ename: 'maan', esalary: 86000.75, edoj:'11/10/2025'}, 
    {eid:3, ename: 'vini', esalary: 75000.75, edoj:'01/19/2025'}, 
  ]
}
