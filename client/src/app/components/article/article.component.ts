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
  public allPosts: Post[];
  private getPostsSubscription: Subscription;
  constructor(private articleService: ArticleDataService) { }
  
  ngOnInit(): void {
    this.getPostsSubscription = this.articleService.getPosts()
      .subscribe((data: Post[]) => this.allPosts = data);
  }
  ngOnDestroy(): void {
    if(this.getPostsSubscription){
      this.getPostsSubscription.unsubscribe()
    }
  }
};


