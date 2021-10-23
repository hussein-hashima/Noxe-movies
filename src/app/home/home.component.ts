import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList:any[]=[];
  tvList:any[]=[];
  peopleList:any[]=[];
  params:any[]=[];
  imgSrc:string='https://image.tmdb.org/t/p/w500';

  constructor(public _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((data)=>{this.movieList=data.results.slice(0,10)});
    this._MoviesService.getTrending('tv').subscribe((data)=>{this.tvList=data.results.slice(0,10)});
    this._MoviesService.getTrending('person').subscribe((data)=>{this.peopleList=data.results.slice(0,10)});
  }

}
