import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private data: DataService, private router: Router){}
  ngOnInit(): void {

  }

  onRegisterCustomerClick(data:any){
    this.data.RegisterCustomer(data).subscribe();
    alert("Registered Successfully...");
    this.router.navigate(['products']);
  }

}
