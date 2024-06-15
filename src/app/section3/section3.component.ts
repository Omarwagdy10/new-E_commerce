import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component implements OnInit {

  constructor (private http : HttpClient ){}

  allproduct!:any

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((res)=>{
      this.allproduct = res;
      console.log(res);
      
    })
  }
}
