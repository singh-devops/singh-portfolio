import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeImportModule } from './theme-import/theme-import.module';
import { IntroComponent } from './portfolio/intro/intro.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { FooterComponent } from './portfolio/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeImportModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
