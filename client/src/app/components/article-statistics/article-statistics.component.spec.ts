import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleStatisticsComponent } from './article-statistics.component';

describe('ArticleStatisticsComponent', () => {
  let component: ArticleStatisticsComponent;
  let fixture: ComponentFixture<ArticleStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
