import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../service/data.service';


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

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
