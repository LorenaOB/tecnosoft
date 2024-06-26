import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationPageComponent } from './planification-page.component';

describe('PlanificationPageComponent', () => {
  let component: PlanificationPageComponent;
  let fixture: ComponentFixture<PlanificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
