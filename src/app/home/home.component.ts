import { ServesComponent } from './../serves/serves.component';
import { Component, OnInit } from '@angular/core';
import { Section4Component } from '../section4/section4.component';
import { Section3Component } from '../section3/section3.component';
import { Section2Component } from '../section2/section2.component';
import { OwlCarouselComponent } from '../owl-carousel/owl-carousel.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,OwlCarouselComponent,Section2Component,Section3Component,Section4Component,ServesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  alldata!: any;

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.alldata = res;
      console.log(res);
    });
  }

}
