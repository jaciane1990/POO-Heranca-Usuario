import { Usuario } from './Usuario';

export class Administrador extends Usuario {
    #codigoSeguranca: string = 'abc';

  alterarCodigoSeguranca(novoCodigo: string): void {
    this.#codigoSeguranca = novoCodigo;
  }

  getCodigoSeguranca() {
    return this.#codigoSeguranca;
  }
}

