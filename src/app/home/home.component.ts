import { Component, OnInit } from '@angular/core';
import { Article } from '@app/articleModel/article';
import { FetchArticleService } from './fetch-article.service';
import _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  pageNumber: number = 1;
  error: any;
  defaultImg = 'assets/defaultImage.png';

  pageChanged(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.router.navigate(['/articles'], { queryParams: { p: pageNumber } });
  }

  updateUrl(e: any) {
    e.target.src = this.defaultImg;
  }

  backToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  fetchSingleArticleToGetCoverImageUrl(articleClone: any): any {
    this.fetchArticleService.fetchArticle(articleClone.url).valueChanges.subscribe((result: any) => {
      articleClone.coverImageUrl = result?.data?.article?.coverImageUrl;
    });
  }

  fetchArticles(): any {
    this.loadingService.setLoading(true);
    this.route.queryParams.subscribe((params) => {
      if (params.p) {
        this.pageNumber = parseInt(params.p);
      }

      this.fetchArticleService.fetchArticles(this.pageNumber).valueChanges.subscribe((res: any) => {
        const { data: { articles = [] } = {}, loading, error } = res;
        const newsYCombinatorUrl = `https://news.ycombinator.com`;
        this.loadingService.setLoading(loading);

        if (error) {
          this.error = error;
          return;
        }

        this.articles = articles.map((article: Article) => {
          let articleClone = JSON.parse(JSON.stringify(article));
          let { coverImageUrl = '', url = '' } = articleClone;

          if (url.includes('item?id=')) {
            articleClone.url = `${newsYCombinatorUrl}/${url}`;
          }

          if (!coverImageUrl) {
            this.fetchSingleArticleToGetCoverImageUrl(articleClone);
          }

          return articleClone;
        });
      });
    });
  }

  constructor(
    private fetchArticleService: FetchArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.fetchArticles();
  }
}
