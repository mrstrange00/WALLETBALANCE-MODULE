import { Component, OnInit } from '@angular/core';
import{WalletService} from '../wallet.service';
import{Wallet} from '../wallet';
import{Observable,Subject} from "rxjs";
import { NgModule } from '@angular/core';
import{FormControl,FormGroup,Validators} from'@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  wallet:Wallet =new Wallet();
constructor(private walletservice:WalletService) { }
accountId:number;



  ngOnInit(): void {
  }
showDetails(accountId:number){
   this.accountId=accountId;
    this.walletservice.getAccountInfo(accountId).subscribe(data => {
      this.wallet = data;
    });
}
}
