import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@app/articleModel/article';
import { FetchArticleService } from '@app/home/fetch-article.service';
import { Location } from '@angular/common';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article;
  defaultImg = 'assets/defaultImage.png';
  error: any;

  constructor(
    private route: ActivatedRoute,
    private fetchArticleService: FetchArticleService,
    private location: Location,
    private loadingService: LoadingService
  ) {}

  goBack(): void {
    this.location.back();
  }

  updateUrl(e: any) {
    console.log('e', e);
    e.target.className = 'd-none';
  }

  fetchArticle() {
    this.loadingService.setLoading(true);
    this.route.queryParams.subscribe((params: any) => {
      this.fetchArticleService.fetchArticle(params.url).valueChanges.subscribe((res: any) => {
        const { data: { article = [] } = {}, loading, error } = res;
        this.loadingService.setLoading(loading);

        if (error) {
          this.error = error;
          return;
        }

        this.article = article;
      });
    });
  }

  ngOnInit(): void {
    this.fetchArticle();
  }
}
