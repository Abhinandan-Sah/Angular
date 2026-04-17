import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  course_name = '.net angular fullstack';
  start_date = new Date();
  course_fee = 4500;
  marks_percent = 80;
  course_description = "This is an angular SPAs course";
  student_details = {"roll no":1, "name": "abhi"};
}
