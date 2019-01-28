import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiggleComponent } from './giggle.component';

describe('GiggleComponent', () => {
  let component: GiggleComponent;
  let fixture: ComponentFixture<GiggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
