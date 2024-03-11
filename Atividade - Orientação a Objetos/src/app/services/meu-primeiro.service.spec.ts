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
