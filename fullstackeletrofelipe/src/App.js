import Menu from './Component/Menu';
import Rotas from './Rotas';
import './Estilo/Style.css' 
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import {lazy, Suspense} from 'react';
const Footer = lazy(() => import('./Codesplitting/Footer/Footer'));



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
        <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <Suspense maxDuration={1000} fallback={<h5 class="text-center -mt-5">carregando...</h5> }>
                    <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
