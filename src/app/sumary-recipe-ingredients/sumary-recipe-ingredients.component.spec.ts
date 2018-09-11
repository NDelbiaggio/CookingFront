import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaryRecipeIngredientsComponent } from './sumary-recipe-ingredients.component';

describe('SumaryRecipeIngredientsComponent', () => {
  let component: SumaryRecipeIngredientsComponent;
  let fixture: ComponentFixture<SumaryRecipeIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumaryRecipeIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaryRecipeIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
