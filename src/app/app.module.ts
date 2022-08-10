import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from 'src/components/about/about.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { SkillsComponent } from 'src/components/skills/skills.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentComponent } from 'src/components/employment/employment.component';

const appRoutes:Routes=[
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"skills", component:SkillsComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"employment", component:EmploymentComponent},
  {path:"contact", component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
