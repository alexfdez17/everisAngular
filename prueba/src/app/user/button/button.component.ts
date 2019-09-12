import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Output() sendInfoEvent = new EventEmitter();
  @Input() message2;

  message = "WHAT"

  constructor() { }

  ngOnInit() {
  }

  sendInfo(){
    this.sendInfoEvent.emit(this.message);
  }

}
