import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationClientComponent } from './reclamation-client.component';

describe('ReclamationClientComponent', () => {
  let component: ReclamationClientComponent;
  let fixture: ComponentFixture<ReclamationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
