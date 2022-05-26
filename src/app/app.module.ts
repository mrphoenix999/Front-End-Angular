import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion/iniciar-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IniciarSesionComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    AboutComponent,
    LoginComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
