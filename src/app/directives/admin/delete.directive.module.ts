import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDirective } from './delete.directive';



@NgModule({
  declarations: [DeleteDirective],
  exports: [DeleteDirective],
  imports: [
    CommonModule
  ]
})
export class DeleteDirectiveModule { }
