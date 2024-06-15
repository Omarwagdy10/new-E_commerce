import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product_id!:any
  product_details!:any

  constructor (private ActiveRouter : ActivatedRoute, private http : HttpClient ){}

  ngOnInit(): void {
    this.product_id = this.ActiveRouter.snapshot.params['id']  
    this.getproduct()
  }


  getproduct(){
    this.http.get(`https://fakestoreapi.com/products/${this.product_id}`).subscribe((res)=>{
      this.product_details = res;
      console.log(res);
      
    })
  }


}
