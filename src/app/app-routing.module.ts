import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent
  },
  {
    path:'home', 
    component: HomeComponent, 
    canActivate:[authGuard]},
  {
    path:'feature', 
    loadChildren: () =>import('./feature/painting.module').then(m => m.PaintingModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
