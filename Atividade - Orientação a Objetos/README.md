# Atividade - Orientação a Objetos

Desenvolver um modelo em Angular utilizando princípios básicos de orientação a objetos como estrutura inicial, que será posteriormente aprofundada e utilizada no projeto. Implementar objetos para a obtenção e manipulação de dados, bem como para controlar as regras de negócios do front, aplicando conceitos fundamentais como Encapsulamento, Abstração e Associações. Estabelecer a estrutura do modelo utilizando práticas de TDD (Desenvolvimento Orientado a Testes).

## Componente 

O componente que está sendo criado permite o cadastro de usuários (colaboradores da Volkswagen que terão acesso ao Dashboard) através de um formulário com campos para nome, cargo, local de trabalho, email e tipo de trabalho. O formulário valida a entrada do usuário e só permite a submissão quando todos os campos obrigatórios estão preenchidos corretamente. Ao submeter, os dados são enviados para um serviço que fará uma chamada ao backend para salvar as informações. O botão de submissão é habilitado apenas quando o formulário está válido, prevenindo submissões inválidas.

![image](https://github.com/Lucasx369/Dashboard/blob/main/Imagens/Tela%20de%20Cadastro.png)
Figura 1. Tela de Cadastro. Fonte: Arquivo Pessoal.

## Serviço 

O serviço que está sendo desenvolvido simula o cadastro de um usuário, imprimindo os dados recebidos no console e retornando um Observable que indica sucesso através de uma mensagem. Utiliza o RxJS para criar uma resposta simulada, facilitando o desenvolvimento e testes sem um servidor real. Este serviço é disponibilizado como um singleton em toda a aplicação, garantindo que uma única instância seja usada onde for necessário.

## Testes

O código de teste para o serviço, verifica se ele é instanciável e se a função de cadastro de usuários funciona corretamente. O primeiro teste confirma se o serviço pode ser criado, enquanto o segundo teste simula o cadastro de um usuário com dados fictícios, verificando se a resposta indica sucesso conforme esperado.




