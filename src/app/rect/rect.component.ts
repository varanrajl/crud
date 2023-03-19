import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent {
  username:any="";
  isaliv:boolean=false;
  title="varan raj";
  changeop(){
    this.title="THE KING VARAN RAJ";
  }
  register = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [ Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30}')]),
  });

  getdata() {
    console.log(this.register.value);
  }

  get vemail() {
    return this.register.get('email');
  }

  get vpwd() {
    return this.register.get('password');
  }
}

