import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewedArticlesComponent } from './most-viewed-articles.component';

describe('MostViewedArticlesComponent', () => {
  let component: MostViewedArticlesComponent;
  let fixture: ComponentFixture<MostViewedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostViewedArticlesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
