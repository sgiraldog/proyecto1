import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserRecordsComponent } from './display-user-records/display-user-records.component';
import { LoginUserDataFormComponent } from './login-user-data-form/login-user-data-form.component';
import { Routes, RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: LoginUserDataFormComponent
  },
  {
    path: 'records',
    component: DisplayUserRecordsComponent
  },
  {
    path: 'login',
    component: LoginUserDataFormComponent
  },
  {
    path: 'register',
    component: InputUserDataFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    DisplayUserRecordsComponent,
    LoginUserDataFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
