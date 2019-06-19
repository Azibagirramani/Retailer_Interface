import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router, private userservice: UserService ) { }

  ngOnInit() {
  }

//user login using UserService
  login(){
    this.userservice.log_in({email: this.email, password: this.password})
        .subscribe((res)=>{
            if (res['token'] && res['user']) {
              this.userservice.set_session(res);
              this.router.navigate(['home/tabs/tab1']);
            }
            else {
              this.router.navigate(['login']);
            }
    })

  }

  // register redirect 
  register(){
    console.log('register')
    this.router.navigate[('register')]
  }
  //reset password redirect
  resetpassword(){
    console.log('reset password')
    this.router.navigateByUrl[('reset-password')]
  }

}
