import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaintingService } from '../painting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
loginForm! : FormGroup;

constructor(private paintservice : PaintingService,
  private router : Router
){}

ngOnInit(): void {
  this.loginForm = new FormGroup({
    username : new FormControl('',[Validators.required, Validators.minLength(3)]),
    password : new FormControl('',[Validators.required,Validators.minLength(3)])
  });
}

onSubmit(){
  if(this.loginForm.invalid){
    return;
  }

  let username = this.loginForm.get('username')?.value;

  this.paintservice.validateUserDetail(username).subscribe(user => {
    if(user){
      //localStorage.setItem('isAuthenticated','true');
      this.paintservice.setauth(true);
      this.router.navigate(['/home']);
    }
    else{
      console.log('user not found');
    }
},
  (error) => {
    alert('Error'+ error.message);
  }
);
}
}
