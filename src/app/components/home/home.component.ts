import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles : Array<String>=[];
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getHomeNews().subscribe( data => {
      this.articles=data['articles'];
    });
  }

}
