import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapArrayAbuseComponent } from './soap-array-abuse.component';

describe('SoapArrayAbuseComponent', () => {
  let component: SoapArrayAbuseComponent;
  let fixture: ComponentFixture<SoapArrayAbuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapArrayAbuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapArrayAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
