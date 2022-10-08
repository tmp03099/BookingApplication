import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingPageComponent } from './searching-page.component';

describe('SearchingPageComponent', () => {
  let component: SearchingPageComponent;
  let fixture: ComponentFixture<SearchingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
