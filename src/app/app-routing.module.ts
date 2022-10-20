import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { EmploymentComponent } from 'src/components/employment/employment.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { SkillsComponent } from 'src/components/skills/skills.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
