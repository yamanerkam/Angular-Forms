import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: "model-driven", component: ModelDrivenFormComponent },
  { path: "template-driven", component: TemplateDrivenFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
