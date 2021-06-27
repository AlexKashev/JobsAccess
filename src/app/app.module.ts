import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopEmployersComponent } from './components/top-employers/top-employers.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeForSectionComponent } from './components/home-for-section/home-for-section.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { EmployeeResourcesComponent } from './components/employee-resources/employee-resources.component';
import { EmployerResourcesComponent } from './components/employer-resources/employer-resources.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { JobComponent } from './components/job/job.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    SearchComponent,
    TopEmployersComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeForSectionComponent,
    AddJobComponent,
    EmployeeResourcesComponent,
    EmployerResourcesComponent,
    EventsComponent,
    EventComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
