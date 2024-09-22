import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CouresComponent } from './coures/coures.component';
import { CategoryType, ICourse } from '../app.componenet.models';
import { NgForOf } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CouresComponent,NgForOf,HomeComponent,HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
  // data={
  //   title:"hellooo"
  // }
  // onkey(title:string):void{
  //   this.data.title=title;
  // }
  readonly courses: Array<ICourse>=[
    {
      id:1,
      description:'Angular 17 for beginners',
      image:'https://img-c.udemycdn.com/course/240x135/3541380_ac15_3.jpg',
      lessonsCount:70,
      category:CategoryType.beginners
    },
    {
      id:2,
      description:'Angular 18 for advanced',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHltocmCNHkT2gHBsoGNaCv9tiuxRXDpdqw&s',
      lessonsCount:40,
      category:CategoryType.beginners
    }
  ];
  beginnerCourse=this.courses[0];// proprity binding
  advancedcourse=this.courses[1];
  
  course(course: ICourse): void{
    // console.log('this is',course.description);
    alert('This is ' + course.description);

  }
 // trackBy function for *ngFor to improve performance
  trackByCourseId(index: number, course: ICourse): number {
    return course.id;
  }
}