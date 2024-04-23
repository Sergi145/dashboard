import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesChangeDetectionComponent } from './pages-change-detection.component';

describe('PagesChangeDetectionComponent', () => {
  let component: PagesChangeDetectionComponent;
  let fixture: ComponentFixture<PagesChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesChangeDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
