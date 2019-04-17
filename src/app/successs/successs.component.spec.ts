import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesssComponent } from './successs.component';

describe('SuccesssComponent', () => {
  let component: SuccesssComponent;
  let fixture: ComponentFixture<SuccesssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
