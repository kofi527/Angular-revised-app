import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
 

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    
   // Ensure this line ends with a comma
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertyCardComponent, 
    NavBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
