import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}

  ngOnInit() {}
}
