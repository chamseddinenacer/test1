import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASIDEComponent } from './aside.component';

describe('ASIDEComponent', () => {
  let component: ASIDEComponent;
  let fixture: ComponentFixture<ASIDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASIDEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
