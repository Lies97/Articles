import { Injectable } from '@angular/core';
import { Article, articleSchema } from '@app/@model/article';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [];

  getQueryString(objectName: string, paramName: string, param: any): string {
    param = typeof param === 'string' ? `"${param}"` : param;
    return `{
      ${objectName}(${paramName}: ${param})${articleSchema}
    }`;
  }

  fetchArticles(pageNumber: number) {
    return this.apollo.watchQuery({
      query: gql(this.getQueryString('articles', 'pageNumber', pageNumber)),
    });
  }

  fetchArticle(url: string) {
    return this.apollo.watchQuery({
      query: gql(this.getQueryString('article', 'url', url)),
    });
  }

  constructor(private apollo: Apollo) {}
}
