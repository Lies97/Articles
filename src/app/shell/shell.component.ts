import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewChecked {
  constructor(public loadingService: LoadingService, private cdr: ChangeDetectorRef) {}
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
