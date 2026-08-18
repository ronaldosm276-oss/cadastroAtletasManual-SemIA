import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaLista } from './atleta-lista';

describe('AtletaLista', () => {
  let component: AtletaLista;
  let fixture: ComponentFixture<AtletaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaLista],
    }).compileComponents();

    fixture = TestBed.createComponent(AtletaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
