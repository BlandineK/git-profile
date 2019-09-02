import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { PictureComponent } from './picture/picture.component';
import { PictureService } from 'services/picture.service';
@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
