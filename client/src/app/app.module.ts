import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleTagsComponent } from './components/article-tags/article-tags.component';
import { ArticleStatisticsComponent } from './components/article-statistics/article-statistics.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

const appRoutes: Routes = [
  { path: 'all-posts', component: ArticleComponent },
  { path: 'edit-post', component: FormComponent },
  { path: '',   redirectTo: '/all-posts', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    LeftSideComponent,
    RightSideComponent,
    FooterComponent,
    ArticleComponent,
    ArticleTagsComponent,
    ArticleStatisticsComponent,
    FormComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [LoaderService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
