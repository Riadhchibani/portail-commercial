import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandClientComponent } from './command-client.component';

describe('CommandClientComponent', () => {
  let component: CommandClientComponent;
  let fixture: ComponentFixture<CommandClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
