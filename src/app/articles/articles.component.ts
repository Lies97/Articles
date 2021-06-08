import { Component, OnInit } from '@angular/core';
import { Article } from '@app/articleModel/article';
import { FetchArticleService } from './fetch-article.service';
import _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  mostViewedArticles: Article[] = [];

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

  public getMostViewedImg(image: string): any {
    return `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0 , 0, 0, 0.4)), url('${image}')`;
  }

  fetchArticles(): any {
    this.route.queryParams.subscribe((params) => {
      if (params.p) {
        this.pageNumber = parseInt(params.p);
      }

      this.fetchArticleService.fetchArticles(this.pageNumber).valueChanges.subscribe((res: any) => {
        const { data: { articles = [] } = {}, error } = res;
        const newsYCombinatorUrl = `https://news.ycombinator.com`;

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

        this.mostViewedArticles = this.articles.filter((article) => article.coverImageUrl).slice(0, 3);
        this.articles = _.differenceBy(this.articles, this.mostViewedArticles, 'description');
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
    this.route.queryParams.subscribe((params) => {
      if (params.p) {
        this.pageNumber = parseInt(params.p);
      }
      this.router.navigate(['/articles'], { queryParams: { p: this.pageNumber } });
    });
    this.fetchArticles();
  }
}
