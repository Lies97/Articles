import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ArticleComponent } from './article.component';

const routes: Routes = [{ path: '', component: ArticleComponent, data: { title: marker('Article') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ArticleRoutingModule {}
