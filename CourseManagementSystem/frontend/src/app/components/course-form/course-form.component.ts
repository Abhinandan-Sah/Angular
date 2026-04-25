import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseCreate } from '../../models/course.model';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  @Output() public readonly courseCreate = new EventEmitter<CourseCreate>();

  public readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    instructor: ['', [Validators.required, Validators.minLength(2)]],
    duration: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(private readonly fb: FormBuilder) {}

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.courseCreate.emit(this.form.getRawValue());
    this.form.reset({ title: '', instructor: '', duration: 1 });
  }
}
