import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header content="Meus álbums favoritos de 2022!"/>
      <Bio/>
      <Cards/>
      <Footer description="Feito com carinho por Luísa. Todos os direitos são reservados."/>
    </div>
  )
}

export default App;
