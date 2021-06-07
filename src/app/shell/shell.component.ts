import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from '@app/@shared/loader/loader.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  // @ViewChild('wrapper') public myScrollContainer: ElementRef;
  // isScrolled = false;
  // scrollbarTop: number;

  constructor(public loadingService: LoadingService) {}
  ngOnInit() {}
  // ngAfterViewInit() {
  //   this.isScrolled = this.myScrollContainer.nativeElement.offSetTop > 56 ? true : false ;
  // }
}
