import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDrivenFormComponent } from './model-driven-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModelDrivenFormComponent],
  imports: [
    CommonModule, FormsModule
  ], exports: [ModelDrivenFormComponent]
})
export class ModelDrivenFormModule { }
