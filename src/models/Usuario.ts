export class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.senha = '123'; // senha padrão
  }

  autenticar(senha) {
    return this.senha === senha;
  }
}