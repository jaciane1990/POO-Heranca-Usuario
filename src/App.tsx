import './App.css'
import { Usuario } from './models/Usuario';

function App() {
  const usuario = new Usuario('João', 'joao@email.com');

  console.log(usuario.autenticar('123')); // true
  console.log(usuario.autenticar('senhaErrada')); // false

  return (
    <>
      <h1>Usuário: {usuario.nome}</h1>
      <p>Email: {usuario.email}</p>
      <p>Autenticado com '123'? {usuario.autenticar('123') ? 'Sim' : 'Não'}</p>
      <p>Autenticado com 'abc'? {usuario.autenticar('abc') ? 'Sim' : 'Não'}</p>
    </>
  );
}

export default App;