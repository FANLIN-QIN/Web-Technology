import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopmComponent } from './popm.component';

describe('PopmComponent', () => {
  let component: PopmComponent;
  let fixture: ComponentFixture<PopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
