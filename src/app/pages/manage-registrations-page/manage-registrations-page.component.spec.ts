import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegistrationsPageComponent } from './manage-registrations-page.component';

describe('ManageRegistrationsPageComponent', () => {
  let component: ManageRegistrationsPageComponent;
  let fixture: ComponentFixture<ManageRegistrationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRegistrationsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageRegistrationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
