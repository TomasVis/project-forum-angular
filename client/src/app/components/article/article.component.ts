import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { ArticleDataService } from '../../services/article.data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ ArticleDataService ],
})
export class ArticleComponent implements OnInit {
  allPosts: Posts[]; 
  constructor(private articleService: ArticleDataService) { }
  
  ngOnInit(): void {
    this.articleService.getPosts()
      .subscribe((data: Posts[]) => this.allPosts = data);
  }
};


