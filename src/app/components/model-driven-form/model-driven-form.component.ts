import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  // Reactive form is the other name
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["kam"],
      surname: ["yaman"],
      email: ["kam35@gmail.com"]

    })
  }
  onSubmit() {
    console.log(this.frm.value)
  }
  ngOnInit(): void {
  }

}
