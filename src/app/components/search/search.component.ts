import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../service/api.service";
import { FormGroup,FormBuilder,FormControl } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchNews: FormGroup;
  searchField: FormControl;
  articles:Array<string>[];
  query : string;
  userQuery : string;

  constructor(private apiService : ApiService, private fb:FormBuilder) {
    this.createForm();
   }
   createForm(){
     this.searchNews = this.fb.group({
       searchField: [''],
     });
   }

  ngOnInit(): void {
    this.search('');
  }
  search(value:string){
    this.userQuery=value;
    this.query=value.replace(/\s/g,'+'); // this method replace all spaces with + (modi india) = (modi+india) 
    console.log(this.query);
    this.apiService.getNewsByQuery(this.query).subscribe(data => {
    this.articles=data['articles'];

    });
    this.query='';

  }

}
