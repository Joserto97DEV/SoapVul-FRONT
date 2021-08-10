import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XssComponent } from './xss.component';

describe('XssComponent', () => {
  let component: XssComponent;
  let fixture: ComponentFixture<XssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
