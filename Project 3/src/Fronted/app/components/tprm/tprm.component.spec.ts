import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TprmComponent } from './tprm.component';

describe('TprmComponent', () => {
  let component: TprmComponent;
  let fixture: ComponentFixture<TprmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TprmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TprmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
