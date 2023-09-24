import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiscographyDetailsComponent } from './page-discography-details.component';

describe('PageDiscographyDetailsComponent', () => {
  let component: PageDiscographyDetailsComponent;
  let fixture: ComponentFixture<PageDiscographyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDiscographyDetailsComponent]
    });
    fixture = TestBed.createComponent(PageDiscographyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
