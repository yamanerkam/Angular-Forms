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
  }

  resetForm() {
    console.log("reset")
    this.frm?.reset()
  }
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.frm)
      console.log(this.frm?.form)
      console.log(this.frm?.controls)
    }, 300)

    /*
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
    
    setTimeout(() => {
      this.frm?.controls['email']?.setValue('kam@gmsail.com');
    }, 400);
    
    setTimeout(() => {
      this.frm?.control.patchValue({
        address: {
          city: 'Izmir',
          country: 'Istanbul'
        }
      });
    }, 400);
    */
  }



}
