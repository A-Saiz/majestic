import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FencesDecksComponent } from './fences-decks.component';

describe('FencesDecksComponent', () => {
  let component: FencesDecksComponent;
  let fixture: ComponentFixture<FencesDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FencesDecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FencesDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
