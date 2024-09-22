import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../../app.componenet.models';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports:[NgFor],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses: ICourse[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  // viewCourse(course: ICourse): void {
  //   alert('This is ' + course.description);
  // }

  viewCourse(course: ICourse): void {
    // Navigate to the course details page
    this.router.navigate(['/course-details', course.id]);
  }
}
