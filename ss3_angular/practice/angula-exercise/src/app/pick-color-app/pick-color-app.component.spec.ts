import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickColorAppComponent } from './pick-color-app.component';

describe('PickColorAppComponent', () => {
  let component: PickColorAppComponent;
  let fixture: ComponentFixture<PickColorAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickColorAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickColorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
