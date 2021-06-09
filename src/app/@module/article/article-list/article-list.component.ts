import { Component, OnInit } from '@angular/core';
import { Article } from '@model/article';
import _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '@service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  mostViewedArticles: Article[] = [];

  pageNumber: number = 1;
  error: any;
  defaultImg = 'assets/defaultImage.png';

  pageChanged(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.router.navigate(['/article'], { queryParams: { p: pageNumber } });
    this.backToTop(false);
  }

  updateUrl(e: any) {
    e.target.src = this.defaultImg;
  }

  backToTop(smooth: boolean = true): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }

  fetchSingleArticleToGetCoverImageUrl(articleClone: any): any {
    this.articleService.fetchArticle(articleClone.url).valueChanges.subscribe((result: any) => {
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

      this.articleService.fetchArticles(this.pageNumber).valueChanges.subscribe((res: any) => {
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

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.p) {
        this.pageNumber = parseInt(params.p);
      }
      this.router.navigate(['/article'], { queryParams: { p: this.pageNumber } });
    });
    this.fetchArticles();
  }
}
