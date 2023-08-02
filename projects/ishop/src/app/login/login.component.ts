import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private data: DataService, private router: Router){}
  
  Customers:any[] = [];
  
  ngOnInit(): void {
    this.data.GetCustomer().subscribe(customer => this.Customers=customer);
  }
  onLoginCustomerClick(data:any){
    for(var customer of this.Customers){
      if(customer.userName==data.userName && customer.password==data.password){
        this.router.navigate(['products']);
        break;
      }else{
        alert('Invalid Login');
        this.router.navigate(['products']);
      }
    }
  }
}
