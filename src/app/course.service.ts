import { Injectable } from '@angular/core';
import { CategoryType, ICourse } from '../app.componenet.models';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly courses: Array<ICourse> = [
    {
      id: 1,
      description: 'Angular 17 for beginners',
      image: 'https://img-c.udemycdn.com/course/240x135/3541380_ac15_3.jpg',
      lessonsCount: 70,
      category: CategoryType.beginners,
    },
    {
      id: 2,
      description: 'Angular 18 for advanced',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHltocmCNHkT2gHBsoGNaCv9tiuxRXDpdqw&s',
      lessonsCount: 40,
      category: CategoryType.beginners,
    },
  ];

  constructor() {}

  getCourses(): Array<ICourse> {
    return this.courses;
  }
}
