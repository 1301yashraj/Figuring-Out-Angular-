import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProjectThisInFirstComponent } from './project-this-in-first/project-this-in-first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProjectThisInFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
