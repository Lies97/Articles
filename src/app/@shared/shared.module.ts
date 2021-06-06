import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [CommonModule, NgxPaginationModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, NgxPaginationModule],
})
export class SharedModule {}
