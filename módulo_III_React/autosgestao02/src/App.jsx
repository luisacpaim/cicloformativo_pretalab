import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer"
import Bio from "./components/Bio";
import "./App.css";

function App() {
  return (
    <>
      <Bio />
      <Title text="Minhas fontes de conteúdos favoritas!"/>
      <Cards />
      <Footer mensagem="Feito com <3 por Luísa Cristina. E todos os direitos são reservados." />
    </>
  );
}

export default App;
