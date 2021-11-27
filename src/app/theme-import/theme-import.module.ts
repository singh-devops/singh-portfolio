import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
  ],
  exports:[
    MatSliderModule,
    MatIconModule,
   ]
})
export class ThemeImportModule { }
