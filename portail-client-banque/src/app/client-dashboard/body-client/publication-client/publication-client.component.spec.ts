import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationClientComponent } from './publication-client.component';

describe('PublicationClientComponent', () => {
  let component: PublicationClientComponent;
  let fixture: ComponentFixture<PublicationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
