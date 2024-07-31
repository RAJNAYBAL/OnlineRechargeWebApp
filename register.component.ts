import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  empname: string="";
  username: string="";
  password: string="";
  balance: number=0;

  constructor(private r:Router,private http:HttpClient)
  {

  }
  LoginPage(){
this.r.navigateByUrl("");
  }
  save()
  {
  
    let bodyData={
      "name":this.empname,
      "uname":this.username,
      "password":this.password,
      "balance":this.balance
    };

    this.http.post("http://localhost:8085/Register/save",bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Register Successfully")
      this.r.navigateByUrl("");
    
    });

  }
}
