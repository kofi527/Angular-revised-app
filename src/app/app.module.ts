import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
 

@NgModule({
  declarations: [
    AppComponent,
   // Ensure this line ends with a comma
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertyCardComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
