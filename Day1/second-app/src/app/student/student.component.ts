import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent {
 student_name: string='Abhi';
 img_path: string = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg';
 welcome(){
  alert('Welcome to Angular Event Binding');
 }
}
