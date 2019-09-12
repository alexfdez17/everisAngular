import { Component } from '@angular/core';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'prueba';
  label1 = 'Button1';
  label2 = 'Button2';
  query = "default query";
  resultado = "default result";

  message;

  receive(event){
    this.message = event;
  }
}
