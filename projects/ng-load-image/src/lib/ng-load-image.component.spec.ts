import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLoadImageComponent } from './ng-load-image.component';

describe('NgLoadImageComponent', () => {
  let component: NgLoadImageComponent;
  let fixture: ComponentFixture<NgLoadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLoadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLoadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
