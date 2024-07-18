import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from '../app.component';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [FormBuilder,FormGroup,FormControl, Validators,  ],
  imports: [
    CommonModule,
    AppComponent,
    SearchformComponent,BrowserModule,ReactiveFormsModule
  ]
})
export class MainpageModule { }
