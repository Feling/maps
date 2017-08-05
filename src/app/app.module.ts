import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';
import {MdInputModule} from "@angular/material";
import {MapsService} from "./maps.service";
import { SnifListComponent } from './snif-list/snif-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SnifListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdInputModule
  ],
  providers: [MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
