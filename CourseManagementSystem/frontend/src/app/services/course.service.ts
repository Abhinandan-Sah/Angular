import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course, CourseCreate } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = `${environment.apiUrl}/courses`;

  constructor(private readonly http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch courses', error);
        return throwError(() => new Error('Unable to load courses.'));
      })
    );
  }

  public addCourse(course: CourseCreate): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError((error) => {
        console.error('Failed to create course', error);
        return throwError(() => new Error('Unable to create course.'));
      })
    );
  }

  public deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Failed to delete course', error);
        return throwError(() => new Error('Unable to delete course.'));
      })
    );
  }
}
