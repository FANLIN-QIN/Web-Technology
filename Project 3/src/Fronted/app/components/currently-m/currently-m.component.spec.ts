import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyMComponent } from './currently-m.component';

describe('CurrentlyMComponent', () => {
  let component: CurrentlyMComponent;
  let fixture: ComponentFixture<CurrentlyMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
