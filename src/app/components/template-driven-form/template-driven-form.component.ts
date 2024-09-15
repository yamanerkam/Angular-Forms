import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("frm", { static: false }) frm: NgForm | undefined;

  submit(data: any, form: any) {
    console.log(this.frm);
    console.log(this.frm?.value)
    console.log("valid:" + this.frm?.valid)
    console.log("submit:" + this.frm?.submitted)
    console.log("touched:" + this.frm?.touched)
    console.log();


  }
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.frm?.setValue({
        name: "kam",
        surname: '',
        email: '',
        address: {
          country: "",
          city: "",
          addressLong: ""
        }
      })
    }, 200)

  }



}
