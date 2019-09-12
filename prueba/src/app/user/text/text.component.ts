import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnChanges {

  @Input() message;
  @Output() sendBack = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    this.sendBack.emit(this.message);
  }

}
