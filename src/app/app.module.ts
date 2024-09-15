import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormModule } from './components/template-driven-form/template-driven-form.module';
import { ModelDrivenFormModule } from './components/model-driven-form/model-driven-form.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateDrivenFormModule,
    ModelDrivenFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TemplateDrivenFormModule,
    ModelDrivenFormModule]
})
export class AppModule { }
