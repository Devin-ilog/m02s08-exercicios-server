import './App.css'
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Card } from "./components/Card";

const prato1 = {
  imagem: "http://localhost:8081/assets/salada-jacare.png",
  nome: "Salada de Jacaré",
  descricao: "Mix de folhas coloridas, tomate cereja,croutôns, palmito e lascas de jacaré salteadas, regadas ao molho balsâmico, oliva e mel.",
  valor: 49,
  tempoPreparo: "10 min",
}

function App() {

  return (
    <div className='app'>
      <Navbar />
      
      <main className='main'>
        <h2>Produtos</h2>
        
      </main>

      <Footer />

    </div>
  )
}

export default App;
