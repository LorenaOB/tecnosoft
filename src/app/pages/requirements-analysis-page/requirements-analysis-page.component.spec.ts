import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsAnalysisPageComponent } from './requirements-analysis-page.component';

describe('RequirementsAnalysisPageComponent', () => {
  let component: RequirementsAnalysisPageComponent;
  let fixture: ComponentFixture<RequirementsAnalysisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequirementsAnalysisPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequirementsAnalysisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
