import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesControlFlowComponent } from './pages-control-flow.component';

describe('PagesControlFlowComponent', () => {
  let component: PagesControlFlowComponent;
  let fixture: ComponentFixture<PagesControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
