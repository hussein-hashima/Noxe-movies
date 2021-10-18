import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=8b338eec65aabe84bdb1c1296f311aef`);
  }
  getMovieDetails(movie_id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=8b338eec65aabe84bdb1c1296f311aef`);
  }
}

