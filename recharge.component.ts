import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent {

  MobileNum:string="";
  sim:string="";
  price:number=0;
  AccNum:number=0;

  constructor(private http:HttpClient)
  {

  }
  Recharge()
  {
    let rechargeData={
    "mob":this.MobileNum,
    "sim":this.sim,
    "ammount":this.price,
    "acNO":this.AccNum
    
  };

this.http.post("http://localhost:8085/Recharge",rechargeData,{responseType:'text'}).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("Recharge Successfully")
  
  });
  

  }
}
