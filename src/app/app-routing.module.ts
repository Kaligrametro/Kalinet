import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CliComponent } from './cli/cli.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo:'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Kalinet'
  },
  {
    path: 'cli',
    component: CliComponent,
    title: 'Kalinet CLI'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
