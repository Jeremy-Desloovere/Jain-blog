import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePhotosComponent } from './page-photos.component';

describe('PagePhotosComponent', () => {
  let component: PagePhotosComponent;
  let fixture: ComponentFixture<PagePhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePhotosComponent]
    });
    fixture = TestBed.createComponent(PagePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
