export interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: number;
}

export interface CourseCreate {
  title: string;
  instructor: string;
  duration: number;
}
