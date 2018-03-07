import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Bank } from "./bank.model";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IfscService {
  bankDetails:Bank;
  constructor(

    private _http:Http
  ) { }

  getBank(ifsc:String){
    return this._http.get(`https://ifsc.razorpay.com/${ifsc}`)
            .map(
              (res:Response)=>{
                // this.bankDetails = res.json();
                return res.json()
              }
            )
            .catch(
              err=>Observable.throw(err.json())
            )
  }
}
