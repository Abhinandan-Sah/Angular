import { Component, OnInit } from '@angular/core';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { Course, CourseCreate } from './models/course.model';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseFormComponent, CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public readonly title = 'PROFESSIONAL COURSE DASHBOARD';
  public readonly trainerName = 'Alex Rivera';

  public courses: Course[] = [];
  public isLoading = false;
  public errorMessage = '';

  constructor(private readonly courseService: CourseService) {}

  public ngOnInit(): void {
    this.loadCourses();
  }

  public onCreateCourse(course: CourseCreate): void {
    this.errorMessage = '';
    this.courseService.addCourse(course).subscribe({
      next: () => this.loadCourses(),
      error: (error: Error) => {
        this.errorMessage = error.message;
      }
    });
  }

  public onDeleteCourse(id: number): void {
    this.errorMessage = '';
    this.courseService.deleteCourse(id).subscribe({
      next: () => {
        this.courses = this.courses.filter((course) => course.id !== id);
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      }
    });
  }

  private loadCourses(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }
}
