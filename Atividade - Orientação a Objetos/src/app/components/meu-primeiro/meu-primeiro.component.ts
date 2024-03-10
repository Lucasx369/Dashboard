/*
import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  standalone: true,
  imports: [],
  templateUrl: './meu-primeiro.component.html',
  styleUrl: './meu-primeiro.component.scss',
})
export class MeuPrimeiroComponent {
  private nome: string;
  private idade: number;
  private cargo: string;

  constructor(
    @Inject('nome') nome: string,
    @Inject('idade') idade: number,
    @Inject('cargo') cargo: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  //meuMetodo(): void {} 
  //meuMetodo(): string {return this.nome} 
  // Qual erro dá no app.component? E se eu chamar este meuMetodo?
  // E se ele retornar uma string?

  meuMetodo(): { nome: string; idade: number; cargo: string } {
    return {
      nome: this.nome,
      idade: this.idade,
      cargo: this.cargo,
    };
  }
}
*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MeuPrimeiroService } from '../../services/meu-primeiro.service';

@Component({
  selector: 'app-meu-primeiro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './meu-primeiro.component.html',
  styleUrl: './meu-primeiro.component.scss',
})
export class MeuPrimeiroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroService: MeuPrimeiroService) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cargo: ['', Validators.required],
      planta: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipoTrabalho: ['', Validators.required]
    });
  }

  cadastrar(): void {
    if (this.cadastroForm.valid) {
      this.cadastroService.cadastrarUsuario(this.cadastroForm.value).subscribe({
        next: (res) => {
          console.log('Usuário cadastrado com sucesso:', res);
          this.cadastroForm.reset();
        },
        error: (err) => console.error('Erro ao cadastrar usuário:', err)
      });
    }
  }
}