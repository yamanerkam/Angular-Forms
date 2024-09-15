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
    console.log(data);
    console.log(this.frm?.value)
  }
  constructor() { }

  ngOnInit(): void {
  }



}
