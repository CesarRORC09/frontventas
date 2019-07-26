import { TestBed } from '@angular/core/testing';

import { AgregarCarritoService } from './agregar-carrito.service';

describe('AgregarCarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgregarCarritoService = TestBed.get(AgregarCarritoService);
    expect(service).toBeTruthy();
  });
});
