import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase"
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Mateus"/>
      <SayMyName nome="João"/>
      <Pessoa nome="Denilson" idade="24" profissao="Estudante" foto="https://via.placeholder.com/150"/>
    </div>

  );
}

export default App;
