import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InprogressComponent } from './inprogress/inprogress.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    DashboardComponent,
    TictactoeComponent,
    InprogressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
