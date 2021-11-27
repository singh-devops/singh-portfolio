import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { IntroComponent } from './portfolio/intro/intro.component';
import { ProjectComponent } from './portfolio/project/project.component';

const routes: Routes = [
  {path:'', component:IntroComponent},
  {path:'about', component:AboutComponent},
  {path:'project', component:ProjectComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
