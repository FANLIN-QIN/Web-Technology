import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinfoComponent } from './minfo.component';

describe('MinfoComponent', () => {
  let component: MinfoComponent;
  let fixture: ComponentFixture<MinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
