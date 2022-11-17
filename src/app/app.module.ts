import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormGroup, FormsModule} from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsEmitPluginModule} from "@ngxs-labs/emitter";
import {TestState} from "./Services/server-http.service";
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    AboutComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([TestState]),
    NgxsEmitPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
