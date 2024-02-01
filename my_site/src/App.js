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
import OutraLista from "./components/OutraLista";
import {useState} from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";

function App() {

    const meusItens = ['React', 'Vue', 'Angular']
    const [nome, setNome] = useState()
    return (
    <div className="App">
      <h1>State Lif</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome = {nome}/>
    </div>
  );
}

export default App;
