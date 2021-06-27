import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './components/add-job/add-job.component';
import { EmployeeResourcesComponent } from './components/employee-resources/employee-resources.component';
import { EmployerResourcesComponent } from './components/employer-resources/employer-resources.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jobs',
    children: [
      {
        path: '',
        component: JobsComponent
      },
      {
        path: 'new',
        component: AddJobComponent
      },
      {
        path: ':id',
        component: JobComponent
      }
    ]
  },
  {
    path: 'events',
    children: [
      {
        path: '',
        component: EventsComponent
      },
      {
        path: 'new',
        component: AddJobComponent
      },
      {
        path: ':id',
        component: EventComponent
      }
    ]
  },
  {
    path: 'employee-resources',
    component: EmployeeResourcesComponent
  },
  {
    path: 'employer-resources',
    component: EmployerResourcesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
