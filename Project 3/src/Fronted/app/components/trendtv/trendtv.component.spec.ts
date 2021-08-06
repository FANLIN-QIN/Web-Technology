import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendtvComponent } from './trendtv.component';

describe('TrendtvComponent', () => {
  let component: TrendtvComponent;
  let fixture: ComponentFixture<TrendtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendtvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
