import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{

  constructor(private data: DataService, private router: Router){}
  
  Admin:any[] = [];

  ngOnInit(): void {
    this.data.GetAdmins().subscribe(admin => {
      this.Admin = admin;
    })
  }

  onLoginAdminClick(data: any) {  
    const admin = this.Admin.find(
      a => a.userName === data.adminUserName && a.password === data.AdminPassword
    );    
    
    if (admin) {
      // Valid login, navigate to 'products'
      this.router.navigate(['products']);
    } else {
      // Invalid login, show an alert
      alert('Invalid Login');
    }   
  }
}
