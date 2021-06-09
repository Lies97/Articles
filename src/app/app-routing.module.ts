import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { LoadingInterceptor } from './loadingInterceptor';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: () => import('./articles/articles.module').then((m) => m.ArticlesModule) },
    { path: 'article', loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule) },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
})
export class AppRoutingModule {}
