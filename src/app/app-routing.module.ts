import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { PipeComponent } from "./pipe/pipe.component";
import { CustompipeComponent } from "./custompipe/custompipe.component";
import { LifecycleHookComponent } from "./lifecycle-hook/lifecycle-hook.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent },
  {path: 'heroes',component: HeroesComponent },
  {path:"test",component: PipeComponent },
  {path:"custompipe",component: CustompipeComponent},
  {path:'lch',component: LifecycleHookComponent},
  {path:'products',component: ProductsComponent},
  {path:'products/:id',component: ProductDetailComponent},
  {path:'**',component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
