import React from 'react';
import Noticia from '../components/Noticia';
import PropTypes from 'prop-types';
import {categorias} from '../helpers';

const Lista = ({noticias, categoria}) => {
     if(noticias.length === 0) return null;

     const obtenerCategoria = () => {
          let name;
          categorias.forEach((cate) => {
               if(cate.value === categoria){
                    name = cate.name;
               }
          })
          return name;
     }
     return (
           <div className="lista">
               <div className="container">
                    <h3 className="text-white display-4">{obtenerCategoria()}</h3>
                    <div className="row justify-content-center">
                         {noticias.map((noticia, i) => <Noticia key={i} noticia={noticia}></Noticia>)}
                    </div>
                   
               </div>
          </div>

     );
}
Lista.propTypes = {
     noticias: PropTypes.array.isRequired,
     categoria: PropTypes.string.isRequired
}
export default Lista;
