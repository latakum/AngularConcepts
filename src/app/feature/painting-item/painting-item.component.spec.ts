import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingItemComponent } from './painting-item.component';

describe('PaintingItemComponent', () => {
  let component: PaintingItemComponent;
  let fixture: ComponentFixture<PaintingItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingItemComponent]
    });
    fixture = TestBed.createComponent(PaintingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
