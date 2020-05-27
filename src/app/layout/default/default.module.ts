import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PostComponent } from 'src/app/modules/post/post.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
