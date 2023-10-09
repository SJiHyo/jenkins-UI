import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'ishop';
  
  categories:any[] = [];
  constructor(private data: DataService){}

  ngOnInit(): void {
    this.data.GetAllCategories().subscribe(category => this.categories = category);
  }
}
