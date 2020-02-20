import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-tags',
  template: `<div class="tag-container" ><div class="tag-label" *ngFor="let tag of tagsArray"><div class="inside-animation">{{ tag }}</div></div></div>`,
  styleUrls: ['./article-tags.component.scss']
})
export class ArticleTagsComponent {
  @Input()
  tagsArray: any;
}
