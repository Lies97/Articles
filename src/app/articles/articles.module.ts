import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { MostViewedArticlesComponent } from './most-viewed-articles/most-viewed-articles.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ArticlesRoutingModule],
  declarations: [ArticlesComponent, MostViewedArticlesComponent],
})
export class ArticlesModule {}
