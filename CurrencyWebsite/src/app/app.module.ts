import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CommandService } from './services/command.service';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConsoleComponent } from './console/console.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NavbarComponent,
    ConsoleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
	  BrowserModule,
	  FormsModule,
    HttpModule
  ],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
