import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceComponentComponent } from './nice-component.component';

describe('NiceComponentComponent', () => {
  let component: NiceComponentComponent;
  let fixture: ComponentFixture<NiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
