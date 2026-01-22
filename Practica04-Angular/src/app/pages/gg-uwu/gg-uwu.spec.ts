import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgUWU } from './gg-uwu';

describe('GgUWU', () => {
  let component: GgUWU;
  let fixture: ComponentFixture<GgUWU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GgUWU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgUWU);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
