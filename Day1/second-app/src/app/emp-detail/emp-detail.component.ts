import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrl: './emp-detail.component.css'
})
export class EmpDetailComponent {
  empId: string|null='';
  employee: any;
  emps: any = [
    { eid: 1, ename: 'sam', esalary: 96000.75, edoj: '11/23/2025' },
    { eid: 2, ename: 'maan', esalary: 86000.75, edoj: '11/10/2025' },
    { eid: 3, ename: 'vini', esalary: 75000.75, edoj: '01/19/2025' },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.paramMap.get('id');
    if (this.empId) {
      this.employee = this.emps.find((emp: any) => emp.eid === parseInt(this.empId!));
    }
  }
}
