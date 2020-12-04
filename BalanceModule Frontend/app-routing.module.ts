import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { ShowPassbookComponent } from './show-passbook/show-passbook.component';
import { ShowpassbookbydateComponent } from './showpassbookbydate/showpassbookbydate.component';
import{ShowDetailsComponent} from './show-details/show-details.component';
import{ShowBalanceComponent} from './show-balance/show-balance.component';

const routes: Routes = [{
path:'show-passbook',component:ShowPassbookComponent
  },
  {
    path:'update-passbook',component:UpdatePassbookComponent
  },
  {
    path:'showpassbookbydate',component:ShowpassbookbydateComponent
  },
  {
  path:'show-details',component:ShowDetailsComponent
  },
  {
    path:'show-balance',component:ShowBalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
