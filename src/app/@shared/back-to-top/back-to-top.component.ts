import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent implements OnInit {
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.isScrolled = window.pageYOffset > 0 ? true : false;
  }

  backToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
