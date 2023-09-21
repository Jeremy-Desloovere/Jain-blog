import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAutobiographyComponent } from './page-autobiography.component';

describe('PageAutobiographyComponent', () => {
  let component: PageAutobiographyComponent;
  let fixture: ComponentFixture<PageAutobiographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAutobiographyComponent]
    });
    fixture = TestBed.createComponent(PageAutobiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
