import { Component, OnInit } from '@angular/core';
import { IfscService } from '../ifsc.service';
import { Bank } from '../bank.model';

@Component({
  selector: 'app-input-screen',
  templateUrl: './input-screen.component.html',
  styleUrls: ['./input-screen.component.css']
})
export class InputScreenComponent implements OnInit {
  bankDetails:Bank

  constructor(
    private ifscService:IfscService
  ) { }

  ngOnInit() {
  }

  getBankDetails(ifsc){
    this.ifscService.getBank(ifsc).subscribe(
      (bank:Bank)=>{
        this.bankDetails=bank;
      }
    )
  }

  goBack(){
    this.bankDetails=null;
  }
}
