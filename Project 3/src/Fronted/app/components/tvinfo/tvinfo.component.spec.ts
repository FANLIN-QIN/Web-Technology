import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvinfoComponent } from './tvinfo.component';

describe('TvinfoComponent', () => {
  let component: TvinfoComponent;
  let fixture: ComponentFixture<TvinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
