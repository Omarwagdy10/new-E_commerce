import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}


@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component implements OnInit {
  constructor( private http : HttpClient,private router : Router){}

  alldata: Product[] = [];

  ngOnInit(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe((res) => {
      this.alldata = res.filter( product=> product.rating.rate > 4.2);
      console.log(res);
    });
  }

  redirect(product_id:any){
    this.router.navigate([`product_details`,product_id])
  }

  
}
