import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase"
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional";

function App() {
  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
