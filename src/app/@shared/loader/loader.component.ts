import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading = true;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
