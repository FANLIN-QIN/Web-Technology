import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendmComponent } from './trendm.component';

describe('TrendmComponent', () => {
  let component: TrendmComponent;
  let fixture: ComponentFixture<TrendmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
