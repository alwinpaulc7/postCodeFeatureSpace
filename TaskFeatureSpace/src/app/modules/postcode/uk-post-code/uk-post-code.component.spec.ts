import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkPostCodeComponent } from './uk-post-code.component';

describe('UkPostCodeComponent', () => {
  let component: UkPostCodeComponent;
  let fixture: ComponentFixture<UkPostCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkPostCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkPostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
