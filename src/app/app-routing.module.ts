import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { GuardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'login',component:LoginComponent
},
{
  path:'display',component:DisplayComponent,canActivate:[GuardGuard]
},
{
  path:'register',component:RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,
  DisplayComponent]