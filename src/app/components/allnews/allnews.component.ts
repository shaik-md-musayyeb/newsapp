import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {

  sources: Array<string>=[];
  selectedSource: string;
  articles: Array<string>=[];

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllSources().subscribe(data =>{
      this.sources=data['sources'];
    });
  }

  changeSource(s:string){
    this.selectedSource=s;
    this.apiService.getNewsBySource(this.selectedSource).subscribe(data => {
        this.articles = data['articles'];
    })
  }

}
