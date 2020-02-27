import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleDataService } from '../../services/article.data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    ArticleDataService
  ]
})

export class FormComponent implements OnInit, OnDestroy {
  articleForm: FormGroup;
  isEdit: boolean;
  loading: boolean;
  subscriptions = new Subscription();
  queryId: string;
  authorControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  titleControl = new FormControl('');
  contentControl = new FormControl('');

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      author: this.authorControl,
      date: new FormControl(''),
      title: this.titleControl,
      content: this.contentControl
    });
    const query = this.route.queryParams.subscribe(params => {
      this.queryId = params['id'];
    });
    this.subscriptions.add(query);
    this.isEdit = !!this.queryId;
    const getPostSubscription = this.articleService.getPost('?id=' + this.queryId).subscribe(data => {
      this.articleForm.patchValue({ ...data });
    });
    this.subscriptions.add(getPostSubscription);
  }

  onClickDelete(): void {
    this.loading = true;
    const deleteSubscription = this.articleService.deletePost('?id=' + this.queryId).subscribe((response) => {
      if(response) {this.loading = false}
      this.router.navigate(['/']);
    });
    this.subscriptions.add(deleteSubscription);
  }

  onClickSave(): void {
    this.loading = true;
    const updateSubscription = this.articleService.updatePost(this.queryId ? '?id=' + this.queryId : '', this.articleForm.value)
      .subscribe((response) => {       
        if(response) {this.loading = false}
        this.router.navigate(['/']);
      });
    this.subscriptions.add(updateSubscription);
  }
 
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  constructor(private articleService: ArticleDataService, private router: Router, private route: ActivatedRoute) { }
}
