import React from 'react';
import Noticia from '../components/Noticia';

const Lista = ({noticias}) => {
     if(noticias.length === 0) return null;
     return (
           <div className="lista">
               <div className="container">
                    <div className="row justify-content-center">
                         {noticias.map((noticia, i) => <Noticia key={i} noticia={noticia}></Noticia>)}
                    </div>
                   
               </div>
          </div>

     );
}
 
export default Lista;
