import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmptableComponent } from './components/emptable/emptable.component';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptableComponent,
    NewemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
