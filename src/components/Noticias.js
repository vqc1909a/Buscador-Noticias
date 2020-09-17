import React, {useState, useEffect} from 'react';
import NoticiasModule from '../modules/Noticias.module.css';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Botones from '../components/Botones'
import Spinner from '../components/Spinner';
import axios from 'axios';
import PropTypes from 'prop-types';

const Noticias = ({title}) => {
     const [noticias, changeNoticias] = useState({
          values: [],
          categoria: ''
     });
     const [spinner, changeSpinner] = useState(false);
     const [totalpages, changeTotalPages] = useState(0);
     const [arraypages, changeArrayPages] = useState([]);
     const [pageactual, changePageActual] = useState(1);


     useEffect(() => {
          if(totalpages){
               let array = []
               for (let  i = 1; i <= Math.ceil(totalpages/9); i++) {
                    array.push(i);
               }
               changeArrayPages([...array]);
          }
          // eslint-disable-next-line
     }, [totalpages]);

     useEffect(()=>{
          if(noticias.categoria){
               (async ()=>{
                    changeSpinner(true);
                    const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=MX&category=${noticias.categoria}&pageSize=9&page=${pageactual}&apiKey=${process.env.REACT_APP_API_KEY}`,  { crossdomain: true });
                    changeNoticias({
                         ...noticias,
                         values: [...data.articles]
                    })
                    changeSpinner(false);
                    
               })()
          }
          // eslint-disable-next-line
     },[pageactual]);


     return (
          <section className={`noticias py-4 ${NoticiasModule.noticias}`}>
               <h2 className="text-center text-uppercase text-white">{title}</h2>
               <Formulario changeNoticias={changeNoticias} changeSpinner={changeSpinner} changeTotalPages={changeTotalPages}></Formulario>                            
               {!spinner 
               ? 
               <Lista noticias={noticias.values} categoria={noticias.categoria}></Lista>
               :
               <Spinner />
               }
               <Botones arraypages={arraypages} changePageActual={changePageActual} pageactual={pageactual}></Botones>
          </section>
     );
}
Noticias.propTypes = {
     title: PropTypes.string.isRequired
} 
export default Noticias;