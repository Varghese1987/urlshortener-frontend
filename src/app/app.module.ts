import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { ActivateuserComponent } from './activateuser/activateuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserhomeComponent } from './userhome/userhome.component';
import { UrlshortnerComponent } from './urlshortner/urlshortner.component';
import { UrlListComponent } from './url-list/url-list.component';
import { ChartComponent } from './chart/chart.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpwdComponent,
    HomeComponent,
    SendmailComponent,
    ActivateuserComponent,
    UserhomeComponent,
    UrlshortnerComponent,
    UrlListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
