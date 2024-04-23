import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesViewTransitionComponent } from './pages-view-transition.component';

describe('PagesViewTransitionComponent', () => {
  let component: PagesViewTransitionComponent;
  let fixture: ComponentFixture<PagesViewTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesViewTransitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesViewTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
