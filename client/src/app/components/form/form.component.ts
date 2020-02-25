import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post'
import { ArticleDataService } from '../../services/article.data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ArticleDataService]
})
// hoisting constructor ngoninit...
export class FormComponent implements OnInit, OnDestroy { 
  articleForm = new FormGroup({
    author: new FormControl(''),
    date: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    id: new FormControl('')
  });
  isEdit: boolean;
  subscriptions = new Subscription();
  queryId: string;

  private post: Post = new Post();

  constructor(private articleService: ArticleDataService, private router: Router, private route: ActivatedRoute) {
    //why initialize in constructor
    const query = this.route.queryParams.subscribe(params => {
      this.queryId = params['id'];
    });
    this.subscriptions.add(query);
  }

  onClickDelete(): void {
    const deleteSubscription = this.articleService.deletePost('?id='+this.queryId).subscribe(() => {
      this.router.navigate(['/']);
    });
    this.subscriptions.add(deleteSubscription);
  }

  onClickSave(): void {
    const updateSubscription = this.articleService.updatePost(this.queryId ? '?id='+this.queryId : '', this.articleForm.value)
    .subscribe(() => {
      this.router.navigate(['/']);
    });
    this.subscriptions.add(updateSubscription);
  }

  ngOnInit(): void {
    this.isEdit = Boolean(!!this.queryId)
    const getPostSubscription = this.articleService.getPost('?id='+this.queryId).subscribe(data => {
      this.post = { ...this.post, ...data };
      this.articleForm.patchValue(this.post);
    });
    this.subscriptions.add(getPostSubscription);
  }

  ngOnDestroy():void {
    this.subscriptions.unsubscribe();
  }
}
