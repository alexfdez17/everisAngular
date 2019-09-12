import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'crud',
    component: ListPetsComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
