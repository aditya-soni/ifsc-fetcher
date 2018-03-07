import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bank } from '../bank.model';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css']
})
export class DisplayScreenComponent implements OnInit {
  @Input() bankDetail:Bank;
  @Output() backEvent= new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  goBack(){
    this.backEvent.emit();
  }
}
