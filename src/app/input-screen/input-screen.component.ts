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
  errorAlert:String;
  constructor(
    private ifscService:IfscService
  ) { }

  ngOnInit() {
  }

  getBankDetails(ifsc){
    if(!ifsc){
      return this.errorAlert = 'IFSC field cannot be empty!'
    }
    this.ifscService.getBank(ifsc).subscribe(
      (bank:Bank)=>{
        this.bankDetails=bank;
      },
      (err)=>{
        console.error(err);
        this.errorAlert= 'Bank not found. Please check your IFSC code again.'
      }
    )
  }

  goBack(){
    this.bankDetails=null;
    this.errorAlert=null;
  }
}
