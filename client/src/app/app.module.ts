import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './core/article/article.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';
import { LeftSideComponent } from './core/left-side/left-side.component';
import { RightSideComponent } from './core/right-side/right-side.component';
import { ArticleTagsComponent } from './core/article-tags/article-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    LeftSideComponent,
    RightSideComponent,
    ArticleTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
