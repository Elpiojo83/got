import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './components/actor-list/actor-list.component';

const routes: Routes = [
  {path: '', component: ActorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
