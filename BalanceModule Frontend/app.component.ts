import { Component } from '@angular/core';
import{DBServiceService} from'./dbservice.service';
import{EmployeeInfo} from './EmployeeInfo';
import{Book} from './Books';
import{HttpClient,HttpClientModule} from'@angular/common/http';
import{EmployeeService} from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProjectCapg';
 /**id1:string;
 booksList;any=[];
 book:Book;
 errorMsg:string;*/
  /**name1:string;
  salary1:string;
  dept1:string;
  uid1:string;
  uname1:string;
  usalary1:string;
  udept1:string;
  data2:EmployeeInfo;
employeeInfo:EmployeeInfo[]=[
  {empId:'101',empName:'Suraj',empSalary:'120000',empDep:'IT'},
  {empId:'102',empName:'Sheikh',empSalary:'12000',empDep:'HR'},
  {empId:'103',empName:'Shiv',empSalary:'20000',empDep:'IT'}
]

  addData()
  {
   let emp=new EmployeeInfo();
   emp.empId=this.id1;
   emp.empName=this.name1;
   emp.empSalary=this.salary1;
   emp.empDep=this.dept1;
   this.employeeInfo.push(emp);
  }
  deleteTableRow(data:EmployeeInfo)
  {
    var index:number=0;
    for(let emp1 of this.employeeInfo)
    {
      if(emp1.empId==data.empId)
      {
        break;
      }
      index++;
    }
      this.employeeInfo.splice(index,1);
    }
updateTableRow(data:EmployeeInfo)
{
this.uid1=data.empId;
this.uname1=data.empName;
this.usalary1=data.empSalary;
this.udept1=data.empDep;
this.data2=data;
}
updateTable(){
  this.data2.empId=this.uid1;
  this.data2.empName=this.uname1;
  this.data2.empSalary=this.usalary1;
  this.data2.empDep=this.udept1;
}
}/** 
addData()
{
  this.myDBService.insert();
  this.myDBService.update();
  this.myDBService.delete();
  this.myDBService.display();
}
}*/
/**
constructor(private httpClient:HttpClient)
{

}
ngOnInit()
{
  this.httpClient.get("assets/data/books.json").
  subscribe(data =>
    {
      console.log(data);
      this.booksList=data;
    },
    (error) =>
    {
      this.errorMsg=error.message;
      alert(this.errorMsg);
    }
    );
}
}
constructor(private employeeService:EmployeeService)
{

}
isValidUserData:any;
i:number;
dataString:string;
errorMsg:string;

OnSubmit()
{
  
  this.employeeService.isValidUser().subscribe(
data=>{
  this.dataString=data;
  alert(this.dataString);
  console.log(this.dataString);
  
},
(error) => {this.errorMsg=error; alert(this.errorMsg);}
  );
}
}*/}