import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandInjectionComponent } from './command-injection.component';

describe('CommandInjectionComponent', () => {
  let component: CommandInjectionComponent;
  let fixture: ComponentFixture<CommandInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
