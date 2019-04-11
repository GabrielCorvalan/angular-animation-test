import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TwoComponentComponent } from './two-component/two-component.component';
import { ThreeComponentComponent } from './three-component/three-component.component';
import { FourComponentComponent } from './four-component/four-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoComponentComponent,
    ThreeComponentComponent,
    FourComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
