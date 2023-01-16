import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarvisAutocompleteComponent } from './jarvis-autocomplete.component';

describe('JarvisAutocompleteComponent', () => {
  let component: JarvisAutocompleteComponent;
  let fixture: ComponentFixture<JarvisAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarvisAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JarvisAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
