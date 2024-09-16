import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: ["kam", [Validators.required, Validators.minLength(3)]],
      surname: ["yaman", Validators.required],
      email: ["kam35@gmail.com", [Validators.required, Validators.email]],
      tel: [232],
      address: formBuilder.group({
        country: ["", Validators.required],
        city: ["", Validators.required],
        addressLong: ["", Validators.required]
      })

    })
  }
  onSubmit() {
    console.log(this.frm.value)
    console.log(this.frm.valid)
  }
  ngOnInit(): void {
  }

}
