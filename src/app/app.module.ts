import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { AppRoutingModule } from './app-routing.module';
import { FullwidthModule } from './layout/fullwidth/fullwidth.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
