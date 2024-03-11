import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuPrimeiroService {
  cadastrarUsuario(dadosUsuario: any) {
    console.log('Cadastrando usuário:', dadosUsuario);
    return of({ success: true, message: 'Usuário cadastrado com sucesso!' });
  }
}