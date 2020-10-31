import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'omri-button',
  templateUrl: './omri-button.component.html',
  styleUrls: ['./omri-button.component.scss']
})
export class OmriButtonComponent implements OnInit {
  @Input() buttonType: string;
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

  onButtonClick(): void {
    // console.log('button is clicked');
    this.buttonClick.emit(true);


  }

}
