import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {
  articles: Array<string>=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTopHeadlines().subscribe( data =>{
      this.articles=data['articles'];
    });
  }

}
