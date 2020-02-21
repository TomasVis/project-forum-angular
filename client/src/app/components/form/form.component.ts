import { Component, OnInit } from '@angular/core';
import { Post } from './post'
import { ArticleDataService } from '../../services/article.data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ ArticleDataService ]
})
export class FormComponent implements OnInit { //other implements
  articleForm = new FormGroup({
    author: new FormControl(''),
    date: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    id: new FormControl('')
  });
  post:Post = new Post; 
  isEdit:boolean; 
  
  constructor(private articleService: ArticleDataService) { }

  onClickDelete() {
    this.articleService.deletePost(window.location.search).subscribe(data => { console.log(data) });
  }
  onClickSave() {

    this.articleService.updatePost(window.location.search, this.articleForm.value).subscribe(data => { console.log(data) });
  }

  ngOnInit(): void {
    this.isEdit= Boolean(window.location.search)
    console.log(this.isEdit)
    this.articleService.getPost(window.location.search).subscribe(data => {

     this.post = {...this.post, ...data};
     this.articleForm.patchValue({author:this.post.author}); 
     this.articleForm.patchValue({date:this.post.date}); 
     this.articleForm.patchValue({title:this.post.title}); 
     this.articleForm.patchValue({content:this.post.content}); 
     this.articleForm.patchValue({id:this.post.id}); 
 
     });


   // this.test.aa = '';
  }

}
