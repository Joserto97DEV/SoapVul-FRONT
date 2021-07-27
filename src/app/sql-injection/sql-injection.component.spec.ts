import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlInjectionComponent } from './sql-injection.component';

describe('SqlInjectionComponent', () => {
  let component: SqlInjectionComponent;
  let fixture: ComponentFixture<SqlInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
