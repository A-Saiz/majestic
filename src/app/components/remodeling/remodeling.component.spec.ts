import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemodelingComponent } from './remodeling.component';

describe('RemodelingComponent', () => {
  let component: RemodelingComponent;
  let fixture: ComponentFixture<RemodelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemodelingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemodelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
