import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleDataService } from '../../services/article.data.service';
import { Subscription } from 'rxjs';
import { Post } from '../form/post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ ArticleDataService ],
})
export class ArticleComponent implements OnInit, OnDestroy {
  allPosts: Post[];
  isLoading:boolean;
  private getPostsSubscription: Subscription;
  constructor(private articleService: ArticleDataService) { }
  
  ngOnInit(): void {
    this.isLoading = true;
    this.getPostsSubscription = this.articleService.getPosts()
      .subscribe((data: Post[]) =>{
        if(data) {this.isLoading = false;}
        this.allPosts = data
      });
  }
  ngOnDestroy(): void {
    if(this.getPostsSubscription){
      this.getPostsSubscription.unsubscribe()
    }
  }
};


