import { Usuario } from './Usuario';

export class Administrador extends Usuario {
  constructor(nome, email) {
    super(nome, email); // chama o construtor da superclasse
    this.codigoSeguranca = 'abc'; // valor padrão
  }

  alterarCodigoSeguranca(novoCodigo) {
    this.codigoSeguranca = novoCodigo;
  }
}
