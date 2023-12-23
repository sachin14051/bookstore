import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginService } from './shared/service/login.service';
import { BookcrudComponent } from './shared/components/bookcrud/bookcrud.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path:"", component: LoginComponent, pathMatch:'full'},
  {path: "navbar", component:NavbarComponent, canActivate:[LoginService]},
  {path: "home", component:HomeComponent, canActivate:[LoginService]},
  {path: "bookCrud", component:BookcrudComponent, canActivate:[LoginService]},
  {path: "bookCrud/:id/edit", component:BookcrudComponent, canActivate:[LoginService]},

  {path:"pageNotFound" , component : PageNotFoundComponent},
  {path:"**", redirectTo:"pageNotFound"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
