import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { ArticlesRoutingModule } from './article-routing.module';
import { MostViewedArticlesComponent } from './article-list/most-viewed-articles/most-viewed-articles.component';
import { zip } from 'lodash';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ArticlesRoutingModule],
  declarations: [ArticleListComponent, MostViewedArticlesComponent, ArticleDetailComponent],
})
export class ArticleModule {}
