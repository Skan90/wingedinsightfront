import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsFormComponent } from './birds-form.component';

describe('BirdsFormComponent', () => {
  let component: BirdsFormComponent;
  let fixture: ComponentFixture<BirdsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
