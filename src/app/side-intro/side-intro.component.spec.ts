import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideIntroComponent } from './side-intro.component';

describe('SideIntroComponent', () => {
  let component: SideIntroComponent;
  let fixture: ComponentFixture<SideIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
