import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  data: any = {
    "id": 1,
    "date": "2015-01-01",
    "author": "admin",
    "photo": "https://randomuser.me/api/portraits/lego/1.jpg",
    "userTag": "Reviewer",
    "views": 52,
    "answers": 10,
    "votes": 2,
    "tags": ["android", "apple", "apps", "google", "technology"],
    "category": "Mobile",
    "title": "Select coordinates which fall within central",
    "content": "I have a database of coordinates adipiscing elit. Proin facilisis est ut ultricies mattis. In vitae velit nec ante viverra convallis. Donec vehicula luctus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.data.id)
  }

}
