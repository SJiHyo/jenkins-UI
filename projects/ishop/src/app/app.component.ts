import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ishop';
  
  categories:any[] = [];

  constructor(private data: DataService){}
  ngOnInit(): void {
    this.data.GetAllCategories().subscribe(category => this.categories = category);
  }
}

