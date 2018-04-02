import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLoadComponent } from './recipe-load.component';

describe('RecipeLoadComponent', () => {
  let component: RecipeLoadComponent;
  let fixture: ComponentFixture<RecipeLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
