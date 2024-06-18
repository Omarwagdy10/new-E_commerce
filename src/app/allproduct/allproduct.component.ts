import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [NgbRatingModule, MatSliderModule],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css',
})
export class AllproductComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  allproducts!: any;
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.allproducts = res;
    });
  }

  redirect(product_id: any) {
    this.router.navigate(['product_details', product_id]);
  }
}
