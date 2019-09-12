import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Input() labelButton: string;
  @Output() searchEvent = new EventEmitter();

  @Input() name: string;
  @Output() messageEvent = new EventEmitter();

  lul = 'BITCH';
  message;

  result;

  constructor() { }

  ngOnInit() {
  }

  search(input){
    this.result = "Consulta realizada con query " + "'" + input + "'"
    this.searchEvent.emit({query: input, resultado: this.result})
  }

  ohshit(name){
    this.message = name;
    this.messageEvent.emit(this.message);
  }

}
