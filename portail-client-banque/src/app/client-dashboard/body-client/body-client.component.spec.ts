import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyClientComponent } from './body-client.component';

describe('BodyClientComponent', () => {
  let component: BodyClientComponent;
  let fixture: ComponentFixture<BodyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
