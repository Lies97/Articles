import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '@app/@shared';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, SharedModule, ArticleRoutingModule],
})
export class ArticleModule {}
