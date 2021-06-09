import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@app/@model/article';
import { Location } from '@angular/common';
import { ArticleService } from '@app/@service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  error: any;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  updateUrl(e: any) {
    e.target.className = 'd-none';
  }

  fetchArticle() {
    this.route.queryParams.subscribe((params: any) => {
      this.articleService.fetchArticle(params.url).valueChanges.subscribe((res: any) => {
        const { data: { article = [] } = {}, loading, error } = res;

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
