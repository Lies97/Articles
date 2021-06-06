import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    { path: 'article', loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule) },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
