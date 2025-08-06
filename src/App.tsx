import { Usuario } from './models/Usuario';
import { Administrador } from './models/Administrador';

function App() {
  const admin = new Administrador('Jaciane', 'jaciane@admin.com');
  admin.alterarCodigoSeguranca('codigo super secreto');

  // Altera o código de segurança
  admin.alterarCodigoSeguranca('xyz456');

  return (
    <>
      <h1>Administrador: {admin.getNome()}</h1>
      <p>Email: {admin.getEmail()}</p>
      <p>Código de Segurança: {admin.getCodigoSeguranca()}</p>
    </>
  );
}

export default App;
