import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TprtvComponent } from './tprtv.component';

describe('TprtvComponent', () => {
  let component: TprtvComponent;
  let fixture: ComponentFixture<TprtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TprtvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TprtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
