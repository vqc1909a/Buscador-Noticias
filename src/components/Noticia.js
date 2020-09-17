import React from 'react';
const Noticia = ({noticia}) => {
     const {source, urlToImage, title, description, url} = noticia;
     return (
          <div className="col-sm-6 col-md-3 col-lg-4">
               <div className="card my-3 bg-secondary">
                    <img src={urlToImage} alt={`Imagen-${title}`} className="card-img-top"/>
                    <div className="card-body text-white">
                         <h3 className="font-weight-bolder">{title}</h3>
                         <p className="lead text-body">{description}</p>
                         <a href={url} className="small muted font-weight-bolder text-white" target="_blank" rel="noopener noreferrer">Fuente: {source.name}</a>
                    </div>
                    <div className="card-header">
                         <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-block">Más Información</a>
                    </div>
               </div>
          </div>
     );
}
 
export default Noticia;