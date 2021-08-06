import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoptvComponent } from './poptv.component';

describe('PoptvComponent', () => {
  let component: PoptvComponent;
  let fixture: ComponentFixture<PoptvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoptvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoptvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
