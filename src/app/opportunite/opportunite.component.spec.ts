import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportuniteComponent } from './opportunite.component';

describe('OpportuniteComponent', () => {
  let component: OpportuniteComponent;
  let fixture: ComponentFixture<OpportuniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportuniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
