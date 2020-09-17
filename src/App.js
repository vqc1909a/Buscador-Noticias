import React, {Fragment} from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
function App() {
  return (
    <Fragment>
      <Header title="Buscador de Noticias"></Header> 
      <main>
        <Noticias title="Encuentra Noticias de Mexico por Categoria" ></Noticias>
      </main>
    </Fragment>
  );
}

export default App;
