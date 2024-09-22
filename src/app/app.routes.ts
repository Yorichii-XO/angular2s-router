import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent,

    },
    {
        path: 'course-list',
        component:CourseListComponent,
    },
    {
        path:'**',
        component:PagenotfoundComponent
    },
    { path: 'course-details/:id', component: CourseDetailsComponent },

];
