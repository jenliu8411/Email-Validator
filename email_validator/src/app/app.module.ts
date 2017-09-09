import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent, AppDialogComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdToolbarModule, MdInputModule, MdFormFieldModule, MdCardModule, MdDialogModule
} from '@angular/material';

import { HttpModule } from '@angular/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AppDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdFormFieldModule,
    MdCardModule,
    MdDialogModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AppService
  ],
  entryComponents: [
    AppDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
