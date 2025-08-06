import { Usuario } from './Usuario';

export class Administrador extends Usuario {
    #codigoSeguranca: string;

  constructor(nome: string, email: string) {
    super(nome, email);
    this.#codigoSeguranca = 'abc'; // também com "#" para indicar encapsulamento
  }

  alterarCodigoSeguranca(novoCodigo: string) {
    this.#codigoSeguranca = novoCodigo;
  }

  getCodigoSeguranca() {
    return this.#codigoSeguranca;
  }
}

