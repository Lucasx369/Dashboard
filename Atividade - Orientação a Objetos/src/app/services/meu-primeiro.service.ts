/*
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuPrimeiroService {
  nome: string; //Deixa público?
  idade: number;
  cargo: string;

  constructor(@Inject('nome') nome: string, @Inject('idade') idade: number, @Inject('cargo') cargo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  mostraNome(): string {
    return this.nome;
  }

  setNome(novoNome: string) {
    this.nome = novoNome;
    return this.nome;
  }
}
*/

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuPrimeiroService {
  cadastrarUsuario(dadosUsuario: any) {
    console.log('Cadastrando usuário:', dadosUsuario);
    // Aqui você substituiria pela sua lógica de chamada de API
    return of({ success: true, message: 'Usuário cadastrado com sucesso!' });
  }
}