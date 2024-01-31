import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase"
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form/>
    </div>
  );
}

export default App;
