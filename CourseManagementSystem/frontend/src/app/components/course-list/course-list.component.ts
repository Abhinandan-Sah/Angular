import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  @Input() public courses: Course[] = [];
  @Output() public readonly courseDelete = new EventEmitter<number>();

  public onDelete(id: number): void {
    this.courseDelete.emit(id);
  }
}
