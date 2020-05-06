import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { PipeComponent } from "./pipe/pipe.component";
import { CustompipeComponent } from "./custompipe/custompipe.component";
const routes: Routes = [
  {path: 'heroes',component: HeroesComponent },
  {path:"test",component: PipeComponent },
  {path:"custompipe",component: CustompipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
