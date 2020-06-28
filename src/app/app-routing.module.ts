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
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LinkReportComponent } from './link-report/link-report.component';


const routes: Routes = [
  {
    path:"",
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
    path:"resetpwd/:string",
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
    children : [
      {
        path:"",
        component:DashBoardComponent,
        canActivate: [AuthGuard],
        children : [
          // {
          //   path:"linkreport/:string",
          //   component:LinkReportComponent,
          //   canActivate: [AuthGuard],
          // }
        ]
      },
      {
        path:"shorturl",
        component:UrlshortnerComponent,
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
