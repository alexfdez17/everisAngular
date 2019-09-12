import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  fuckittho;
  testing = "Hola"

  constructor() { }

  ngOnInit() {
  }

  onClick(input){
    this.testing = input;
  }

}
