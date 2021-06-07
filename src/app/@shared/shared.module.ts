import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  imports: [CommonModule, NgxPaginationModule],
  declarations: [LoaderComponent, BackToTopComponent],
  exports: [LoaderComponent, BackToTopComponent, NgxPaginationModule],
})
export class SharedModule {}
