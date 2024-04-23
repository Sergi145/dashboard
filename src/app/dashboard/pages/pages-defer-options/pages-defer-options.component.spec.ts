import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDeferOptionsComponent } from './pages-defer-options.component';

describe('PagesDeferOptionsComponent', () => {
  let component: PagesDeferOptionsComponent;
  let fixture: ComponentFixture<PagesDeferOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesDeferOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesDeferOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
