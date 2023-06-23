import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCodeDetailsComponent } from './post-code-details.component';

describe('PostCodeDetailsComponent', () => {
  let component: PostCodeDetailsComponent;
  let fixture: ComponentFixture<PostCodeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCodeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
