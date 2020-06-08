import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string='c94fffd511d7466f970180f14dfb71a7';
  source: string;
  query: string;
  constructor(private http: HttpClient) { }
  getHomeNews(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&category=health&category=sports&apiKey=${this.apiKey}`);
  }
  getTopHeadlines(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&countryin&apiKey=${this.apiKey}`);
  }

  getAllSources(){
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`);
  }

  getNewsBySource(selectedSource:string){
    // console.log(selectedSource);
    // console.log(`https://newsapi.org/v2/top-headlines?sources=${this.source}&apiKey=${this.apiKey}`);
    
    this.source=selectedSource;
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${this.source}&apiKey=${this.apiKey}`);
    
  }

  getNewsByQuery(q:string){
    this.query=q;
    console.log(`https://newsapi.org/v2/everything?qInTitle=${this.query}&apiKey=${this.apiKey}`);
    return this.http.get(`https://newsapi.org/v2/everything?qInTitle=${this.query}&language=en&apiKey=${this.apiKey}`)
  }
}

