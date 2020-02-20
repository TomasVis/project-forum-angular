import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  newData: any; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/posts').subscribe(data => {
      this.newData = data;
    });
  }
};


