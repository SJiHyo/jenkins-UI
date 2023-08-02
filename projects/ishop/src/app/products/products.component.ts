import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products:any[] = [];
  constructor(private data: DataService){}
  ngOnInit(): void {
    this.data.GetAllProducts().subscribe(product => this.products = product);
  }

}
