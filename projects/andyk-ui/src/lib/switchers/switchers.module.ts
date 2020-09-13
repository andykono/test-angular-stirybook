import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchersComponent} from './switchers.component';



@NgModule({
  declarations: [SwitchersComponent],
  imports: [
    CommonModule
  ],
  exports: [SwitchersComponent]
})
export class SwitchersModule { }
