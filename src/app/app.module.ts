import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyeComponent } from './eye/eye.component';
import { CliComponent } from './cli/cli.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommandLineComponent } from './cli/command-line/command-line.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EyeComponent,
    CliComponent,
    HomeComponent,
    CommandLineComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
