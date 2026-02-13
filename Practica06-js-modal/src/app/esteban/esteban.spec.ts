import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esteban } from './esteban';

describe('Esteban', () => {
  let component: Esteban;
  let fixture: ComponentFixture<Esteban>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esteban]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esteban);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
