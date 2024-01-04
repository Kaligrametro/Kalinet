import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyeComponent } from './eye/eye.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CliComponent } from './cli/cli.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommandLineComponent } from './cli/command-line/command-line.component';

@NgModule({
  declarations: [
    AppComponent,
    EyeComponent,
    NavbarComponent,
    CliComponent,
    HomeComponent,
    CommandLineComponent
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
