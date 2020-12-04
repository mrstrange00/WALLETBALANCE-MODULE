import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './highlight.directive';
import {reversestring} from './reversestring.pipe';
import{DBServiceService} from'./dbservice.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import {HttpClientModule} from '@angular/common/http';
import{EmployeeService} from './employee.service';
import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { ShowPassbookComponent } from './show-passbook/show-passbook.component';
import { ShowpassbookbydateComponent } from './showpassbookbydate/showpassbookbydate.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes:Routes=[
  {path:'ProductListAll',component:ProductListComponent},
  {path:'ProductList/:id',component:ProductListComponent},
{path:'ContactUS',component:ContactUSComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective,
    reversestring,
    ProductListComponent,
    ContactUSComponent,
   UpdatePassbookComponent,
    ShowPassbookComponent,
    ShowpassbookbydateComponent,
    ShowBalanceComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
