import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  "uname": string="";
  "password":string="";

  constructor(private route:Router ,private http:HttpClient)
  {

  }
  reg()
  {
    this.route.navigateByUrl('/register')
  }
  Login()
  {

    let loginData={
      "uname":this.uname,
      "password":this.password
    };

    
    this.http.post("http://localhost:8085/login",loginData).subscribe((resultData:any)=>
      {
        console.log(resultData);
        // let msg=resultData;
        // if(msg == "Login Successfully")
        //   {
        //     alert("bdd")
        
        //     this.route.navigateByUrl('/home')
        //   }
        if(resultData.message == "Login Successfully")
        {
          alert("Login Successfully")         
          this.route.navigateByUrl('/home')
        }
        else if(resultData.message == "Login Failed UserName is Wrong")
        {
          alert("Login Failed UserName is Wrong")
        }
        else if(resultData.message=="Login Failed Password is Wrong")
          {
            alert("Login Failed UserName is Wrong")
          }
          else if(resultData.message == "User Dosnt Exist")
            {
              alert("User Dosnt Exist")
            }
            else{
              alert("UserName And Password is Wrong")
            }
      
      });

  }
}
