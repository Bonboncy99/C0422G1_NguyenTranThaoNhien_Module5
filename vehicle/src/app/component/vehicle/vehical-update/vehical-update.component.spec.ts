import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalUpdateComponent } from './vehical-update.component';

describe('VehicalUpdateComponent', () => {
  let component: VehicalUpdateComponent;
  let fixture: ComponentFixture<VehicalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
