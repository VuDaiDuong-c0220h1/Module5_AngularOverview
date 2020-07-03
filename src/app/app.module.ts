import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PetComponent} from './profile/pet/pet.component';
import {FormsModule} from '@angular/forms';
import {CalculatorComponent} from './profile/calculator/calculator.component';
import { ColorComponent } from './profile/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    CalculatorComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
