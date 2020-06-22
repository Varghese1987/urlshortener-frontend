import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { ActivateuserComponent } from './activateuser/activateuser.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UrlshortnerComponent } from './urlshortner/urlshortner.component';
import { AuthGuard } from './auth.guard';
import { UrlListComponent } from './url-list/url-list.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"sendmail",
    component:SendmailComponent
  },
  {
    path:"resetpwd",
    component:ResetpwdComponent
  },
  {
    path:"activateuser/:string",
    component: ActivateuserComponent
  },
  {
    path:"userhome",
    component:UserhomeComponent,
    canActivate: [AuthGuard],
    children :[
      {
        path:"shorturl",
        component:UrlshortnerComponent,
        canActivate: [AuthGuard],
      },
      {
        path:"listUrl",
        component:UrlListComponent,
        canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
