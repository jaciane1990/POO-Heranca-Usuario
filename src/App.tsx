import { Administrador } from './models/Administrador';

function App() {
  const admin = new Administrador('Jaciane', 'jaciane@admin.com');

  // Exibe os dados usando os métodos getters
  return (
    <>
      <h1>Administrador: {admin.getNome()}</h1>
      <p>Email: {admin.getEmail()}</p>
      <p>Código de Segurança: {admin.getCodigoSeguranca()}</p>
    </>
  );
}

export default App;
