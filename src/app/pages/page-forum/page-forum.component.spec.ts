import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForumComponent } from './page-forum.component';

describe('PageForumComponent', () => {
  let component: PageForumComponent;
  let fixture: ComponentFixture<PageForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageForumComponent]
    });
    fixture = TestBed.createComponent(PageForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
