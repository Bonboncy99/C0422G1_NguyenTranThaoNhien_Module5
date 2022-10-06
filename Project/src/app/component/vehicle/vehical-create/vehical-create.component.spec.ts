import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalCreateComponent } from './vehical-create.component';

describe('VehicalCreateComponent', () => {
  let component: VehicalCreateComponent;
  let fixture: ComponentFixture<VehicalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
