import './App.css'
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Card } from "./components/Card";
import { Produtos } from './pages/Produtos/Produtos';

function App() {

  return (
    <div className='app'>
      <Navbar />
      
      <main className='main'>
        <Produtos />
      </main>

      <Footer />

    </div>
  )
}

export default App;
