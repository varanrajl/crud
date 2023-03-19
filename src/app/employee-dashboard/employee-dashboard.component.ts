import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.module';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
   formValue !:FormGroup;
   employeeData !:any;
   showAdd!:boolean;
   showupdate!:boolean;
   datas:any;
   data:any
   employeeModelObj:EmployeeModel=new EmployeeModel();
  constructor(private formbuilder:FormBuilder,
    private api:ApiService){

  }

  ngOnInit(): void {
  this.formValue=this.formbuilder.group({
    firstName:[''],
    lastName:[''],
    email:[''],
    mobile:[''],
    salary:['']
  })
  this.getAllEmployee();
  }
  clickAddEmployee(){
this.showAdd=true;
this.showupdate=false;
  }
postEmployeeDatails(){
  this.employeeModelObj.firstName=this.formValue.value.firstName;
  this.employeeModelObj.lastName=this.formValue.value.lastName;
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.mobile=this.formValue.value.mobile;
  this.employeeModelObj.salary=this.formValue.value.salary;

  this.api.postdata(this.employeeModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Employee Added successfully");
    let ref=document.getElementById("cancel");
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  },
  err=>{
    alert("something want wrong");
})
}
 getAllEmployee(){
  this.api.getdata()
  .subscribe(res=>{
   this.employeeData=res;
  })
}
deleteEmployee(id:any){
  this.api.deletedata(id)
  .subscribe(res=>{
    alert("Employee deleted");
    this.getAllEmployee();
  })
}
onEdit(row:any){
  this.showAdd=false;
this.showupdate=true;
  this.employeeModelObj._id=row._id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);
   this.getAllEmployee();
}
updateEmployeeDetails(){
  this.employeeModelObj.firstName=this.formValue.value.firstName;
  this.employeeModelObj.lastName=this.formValue.value.lastName;
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.mobile=this.formValue.value.mobile;
  this.employeeModelObj.salary=this.formValue.value.salary;
  this.api.Updateproducts(this.employeeModelObj,this.employeeModelObj._id)
  .subscribe(res=>{
    alert("Updated Successfully");
    this.formValue.reset();
    let ref=document.getElementById("cancel");
    ref?.click();
    this.getAllEmployee();
  })
}



}
