import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { SplashComponent } from './splash/splash.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'home', component: SplashComponent },
  { path: 'maintenance', component: InprogressComponent},
  { path: 'about', component: AboutmeComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
