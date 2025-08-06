export class Usuario {
    #nome: string;
    #email: string;
    #senha: string;

  constructor(nome: string, email: string) {
    this.#nome = nome;
    this.#email = email;
    this.#senha = '123'; // atributo "protegido" (por convenção, usando _)
  }

  autenticar(senha: string) {
    return this.#senha === senha;
  }

  getNome() {
    return this.#nome;
  }

  getEmail() {
    return this.#email;
  }
}