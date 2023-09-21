import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiscographyComponent } from './page-discography.component';

describe('PageDiscographyComponent', () => {
  let component: PageDiscographyComponent;
  let fixture: ComponentFixture<PageDiscographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDiscographyComponent]
    });
    fixture = TestBed.createComponent(PageDiscographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
