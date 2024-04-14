import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxPageComponent } from './uiux-page.component';

describe('UiuxComponent', () => {
  let component: UiuxPageComponent;
  let fixture: ComponentFixture<UiuxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiuxPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiuxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
