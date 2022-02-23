import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpassFormComponent } from './forgetpass-form.component';

describe('ForgetpassFormComponent', () => {
  let component: ForgetpassFormComponent;
  let fixture: ComponentFixture<ForgetpassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
