import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';
import {BookDashboardModule} from './book-dashboard/book-dashboard.module';
import {ClientModule} from './client/client.module';

@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BookDashboardModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
