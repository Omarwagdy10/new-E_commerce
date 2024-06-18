import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterService } from '../services/counter.service';

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
  count=0

  constructor (private ActiveRouter : ActivatedRoute, private http : HttpClient, private counter : CounterService, private router : Router ){}

  ngOnInit(): void {
    this.product_id = this.ActiveRouter.snapshot.params['id']  
    this.getproduct()
    this.counter.getcounter().subscribe((val:number)=>{
      this.count=val
    })
  }


  getproduct(){
    this.http.get(`https://fakestoreapi.com/products/${this.product_id}`).subscribe((res)=>{
      this.product_details = res;
      console.log(res);
      
    })
  }

  addtocart(){
    this.counter.setcount(this.count+1)
  }

  redirect(){
    this.router.navigate([`home`])
  }


}
