import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor( private http : HttpClient){}

  alldata: Product[] = [];

  ngOnInit(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe((res) => {
      this.alldata = res.filter( product=> product.rating.rate > 4.2);
      console.log(res);
    });
  }

}
