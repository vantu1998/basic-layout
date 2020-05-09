import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { PipeComponent } from './pipe/pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { FormatDataPipe } from './pipeCusom/format-data.pipe';
import { FilterPipe } from './pipeCusom/filter.pipe';
import { ArrSortPipe } from './pipeCusom/arr-sort.pipe';
import { SortNamePipe } from './pipeCusom/sort-name.pipe';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    PipeComponent,
    CustompipeComponent,
    FormatDataPipe,
    FilterPipe,
    ArrSortPipe,
    SortNamePipe,
    LifecycleHookComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
