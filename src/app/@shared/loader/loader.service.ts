import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = new Subject<boolean>();

  setLoading(loading: boolean): void {
    this.isLoading.next(loading);
  }

  constructor() {}
}
