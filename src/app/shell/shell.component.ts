import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewInit {
  constructor(public loadingService: LoadingService, private cdr: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
