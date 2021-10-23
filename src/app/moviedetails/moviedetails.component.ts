import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  id:string='';
  type:string='';
  details:any={};
  genresList:any[]=[];
  imgSrc:string='https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params.id;
    this.type=this._ActivatedRoute.snapshot.params.media_type;

    this._MoviesService.getMovieDetails(this.type , this.id).subscribe((data)=>{this.details=data;this.genresList=data.genres;});
    console.log(this.genresList);

    
  }

}
