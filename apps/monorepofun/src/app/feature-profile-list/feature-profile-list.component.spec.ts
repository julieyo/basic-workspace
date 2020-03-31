import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProfileListComponent } from './feature-profile-list.component';

describe('FeatureProfileListComponent', () => {
  let component: FeatureProfileListComponent;
  let fixture: ComponentFixture<FeatureProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
