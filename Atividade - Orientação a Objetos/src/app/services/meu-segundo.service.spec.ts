/*
import { TestBed } from '@angular/core/testing';

import { MeuSegundoService } from './meu-segundo.service';

describe('MeuSegundoService', () => {
  let service: MeuSegundoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'nome', useValue: 'Fulano' },
        { provide: 'idade', useValue: 30 },
        { provide: 'cargo', useValue: 'Estagiario' },
        {
          provide: MeuSegundoService,
          useClass: MeuSegundoService,
        },
      ],
    });
    service = TestBed.inject(MeuSegundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should inherit properties from MeuPrimeiroServiceService', () => {
    expect(service.nome).toBe('Fulano');
    expect(service.idade).toBe(30);
  });

  it('showNome should return the inherited name', () => {
    expect(service.showNome()).toBe('Fulano');
  });
});
*/