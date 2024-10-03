import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdramaReviewComponent } from './kdrama-review.component';

describe('KdramaReviewComponent', () => {
  let component: KdramaReviewComponent;
  let fixture: ComponentFixture<KdramaReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KdramaReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdramaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
