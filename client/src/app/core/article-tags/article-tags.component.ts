import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-tags',
  template: `<div class="tag-container" ><div class="tag-label" *ngFor="let tag of data"><div class="inside-animation">{{ tag }}</div></div></div>`,
  styleUrls: ['./article-tags.component.scss']
})
export class ArticleTagsComponent implements OnInit {
  data: any = ["android", "apple", "apps", "google", "technology"]

  constructor() { }

  ngOnInit(): void {
  }

}
