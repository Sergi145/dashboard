import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDeferViewsComponent } from './pages-defer-views.component';

describe('PagesDeferViewsComponent', () => {
  let component: PagesDeferViewsComponent;
  let fixture: ComponentFixture<PagesDeferViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesDeferViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesDeferViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
