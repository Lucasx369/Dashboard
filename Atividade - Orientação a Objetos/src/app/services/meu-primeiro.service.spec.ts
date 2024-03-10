/*
import { TestBed } from '@angular/core/testing';

import { MeuPrimeiroService } from './meu-primeiro.service';

describe('MeuPrimeiroService', () => {
  let service: MeuPrimeiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'nome', useValue: 'Fulano' },
        { provide: 'idade', useValue: 25 },
        { provide: 'cargo', useValue: 'Estagiario' },
      ],
    });
    service = TestBed.inject(MeuPrimeiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial name', () => {
    expect(service.mostraNome()).toEqual('Fulano');
  });

  it('should set new name', () => {
    const newName = 'Beltrano';
    service.setNome(newName);
    expect(service.mostraNome()).toEqual(newName);
  });
});
*/
import { TestBed } from '@angular/core/testing';
import { MeuPrimeiroService } from './meu-primeiro.service';

describe('MeuPrimeiroService', () => {
  let service: MeuPrimeiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuPrimeiroService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve cadastrar um usuário e retornar uma mensagem de sucesso', (done: DoneFn) => {
    const mockUserData = { nome: 'Teste', cargo: 'Desenvolvedor', planta: 'Planta1', email: 'teste@teste.com', tipoTrabalho: 'Remoto' };

    service.cadastrarUsuario(mockUserData).subscribe(response => {
      expect(response.success).toBeTrue();
      expect(response.message).toEqual('Usuário cadastrado com sucesso!');
      done();
    });
  });
});
