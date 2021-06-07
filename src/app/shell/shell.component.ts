import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}
  ngOnInit() {}
}
