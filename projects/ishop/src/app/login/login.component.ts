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
    this.data.GetCustomer().subscribe(customer => {
      this.Customers = customer;
    });
  }
  
  onLoginCustomerClick(data: any) {  
    const customer = this.Customers.find(
      c => c.usertName === data.userName && c.password === data.password
    );    
    
    if (customer) {
      // Valid login, navigate to 'products'
      this.router.navigate(['products']);
    } else {
      // Invalid login, show an alert
      alert('Invalid Login');
    }   
  }
}
