import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandClientComponent } from './demand-client.component';

describe('DemandClientComponent', () => {
  let component: DemandClientComponent;
  let fixture: ComponentFixture<DemandClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
