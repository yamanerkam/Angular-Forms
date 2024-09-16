import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDrivenFormComponent } from './model-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModelDrivenFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ModelDrivenFormComponent]
})
export class ModelDrivenFormModule { }
