import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberPassPageComponent } from './remember-pass-page.component';

describe('RememberPassPageComponent', () => {
  let component: RememberPassPageComponent;
  let fixture: ComponentFixture<RememberPassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RememberPassPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RememberPassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
