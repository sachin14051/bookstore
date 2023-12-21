import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginService } from './shared/service/login.service';

const routes: Routes = [
  {path:"", component: LoginComponent, pathMatch:'full'},
  {path: "navbar", component:NavbarComponent, canActivate:[LoginService]},
  {path:"pageNotFound" , component : PageNotFoundComponent},
  {path:"**", redirectTo:"pageNotFound"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
