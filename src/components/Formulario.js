import React, {useState} from 'react';
import useNoticia from '../hooks/useCategoria';
import axios from 'axios';
import PropTypes from 'prop-types';
import {categorias} from '../helpers';
const Formulario = ({changeNoticias, changeSpinner, changeTotalPages}) => {
     const [categoria, seleccionarNoticia, changeCategoria] = useNoticia('', categorias);
     const [error, changeError] = useState(false);

     const handleSubmit = async (e) => {
          e.preventDefault();
          changeSpinner(true);
          if(categoria.trim() === ''){
               changeError(true);
               changeSpinner(false);
               return null;
          }
          changeError(false);
          const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=MX&category=${categoria}&pageSize=9&page=1&apiKey=${process.env.REACT_APP_API_KEY}`);

          changeNoticias({
               values: [...data.articles],
               categoria,
          });
          changeTotalPages(data.totalResults);
          changeSpinner(false);
          changeCategoria('');
     }
     return (
           <div className="formulario">
               <div className="container">
                    <div className="row justify-content-center">
                         <div className="col-md-6">
                              <form className="my-3" onSubmit={handleSubmit}>    
                                   {error ? <div className="alert alert-danger">El campo es requerido</div> : null}
                                   {seleccionarNoticia()}
                                   <button type="submit" className="btn btn-primary btn-lg btn-block">Buscar</button>
                              </form>    
                         </div>
                    </div>
               </div>
          </div> 
     );
}
Formulario.propTypes = {
     changeNoticias: PropTypes.func.isRequired,
     changeSpinner: PropTypes.func.isRequired,
     changeTotalPages: PropTypes.func.isRequired
}
export default Formulario;