import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostComponent } from './modules/post/post.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'post',
      component: PostComponent
    }]
  },
  {
    path:'login',
    component: FullwidthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
