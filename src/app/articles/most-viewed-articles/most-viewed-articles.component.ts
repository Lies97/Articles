import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@app/articleModel/article';

@Component({
  selector: 'app-most-viewed-articles',
  templateUrl: './most-viewed-articles.component.html',
  styleUrls: ['./most-viewed-articles.component.scss'],
})
export class MostViewedArticlesComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  ngOnInit(): void {}
}
