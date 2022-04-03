import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  email:String;
  password:String;

  ngOnInit() {
  }

  CheckLogin()
  {//dummy login
    if(this.email == "default@gmit.ie" && this.password == "password1")
    {
      this.Navigate();
    }
    else if(this.email == "G00397721@gmit.ie" && this.password == "password1")
    {
      this.Navigate();
    }
    else if(this.email == "G00391849@gmit.ie" && this.password == "password1")
    {
      this.Navigate();
    }
    else if(this.email == "G00338424@gmit.ie" && this.password == "password1")
    {
      this.Navigate();
    }
    else if(this.email == "G00398172@gmit.ie" && this.password == "password1")
    {
      this.Navigate();
    }
  }
  Navigate()
  {
    console.log("inside navigate")
    this.router.navigate(['/tabs']);
  }
}
