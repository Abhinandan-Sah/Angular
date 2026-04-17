import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {
  emps:any=[
    {eid:1, ename: 'sam', esalary: 96000.75, edoj:'11/23/2025'}, 
    {eid:2, ename: 'maan', esalary: 86000.75, edoj:'11/10/2025'}, 
    {eid:3, ename: 'vini', esalary: 75000.75, edoj:'01/19/2025'}, 
  ]
}
