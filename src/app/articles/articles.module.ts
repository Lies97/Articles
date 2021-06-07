import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ArticlesRoutingModule],
  declarations: [ArticlesComponent],
})
export class ArticlesModule {}
