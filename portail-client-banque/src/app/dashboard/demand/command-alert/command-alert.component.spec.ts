import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandAlertComponent } from './command-alert.component';

describe('CommandAlertComponent', () => {
  let component: CommandAlertComponent;
  let fixture: ComponentFixture<CommandAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
