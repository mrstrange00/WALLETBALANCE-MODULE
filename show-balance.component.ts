import { Component, OnInit } from '@angular/core';
import{WalletService} from '../wallet.service';
import{Wallet} from '../wallet';
import{Observable,Subject} from "rxjs";
import { NgModule } from '@angular/core';
import{FormControl,FormGroup,Validators} from'@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.scss']
})
export class ShowBalanceComponent implements OnInit {

  constructor(private walletservice:WalletService) { }
accountId:number;
 wallet:Wallet =new Wallet();
  ngOnInit(): void {
  }
showBalance(accountId:number){
   this.accountId=accountId;
    this.walletservice.getBalance(accountId).subscribe(data => {
      this.wallet.accountBalance = data;
    });
}
}