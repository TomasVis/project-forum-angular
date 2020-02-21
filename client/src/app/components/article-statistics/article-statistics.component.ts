import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-statistics',
  templateUrl: './article-statistics.component.html',
  styleUrls: ['./article-statistics.component.scss']
})
export class ArticleStatisticsComponent {
  @Input()
  post:any; 
  
}
