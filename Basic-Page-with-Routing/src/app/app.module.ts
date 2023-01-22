import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ProductComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
