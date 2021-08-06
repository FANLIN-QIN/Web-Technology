import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuewatchComponent } from './continuewatch.component';

describe('ContinuewatchComponent', () => {
  let component: ContinuewatchComponent;
  let fixture: ComponentFixture<ContinuewatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuewatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
