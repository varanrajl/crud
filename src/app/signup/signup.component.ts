import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public signupForm !:FormGroup;
  customValidator: any;
 constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){

 }
get vname(){
  return this.signupForm.get('Fullname');
}

  ngOnInit() {
 this.signupForm=this.formBuilder.group({
  Fullname:['',Validators.minLength(5)],
  email:[''],
  password:[''],
  mobile:['']
 })
  }
  signUp(){
  this.http.post<any>("http://localhost:3000/signupusers",this.signupForm.value)
  .subscribe(res=>{
    alert('signup successfully');
     this.router.navigate(['login']);
  },err=>{
    alert('something went wrong');
  } )
  }


}


