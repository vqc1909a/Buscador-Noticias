import React from 'react';
const Botones = ({arraypages, changePageActual, pageactual}) => {
     return (
          <div className="botones">
               <div className="container">
                     <div className="row justify-content-center">
                         <div className="btn-group btn-group-lg">
                              {arraypages.map(page => <button key={page} onClick={() => changePageActual(page)} className={`btn btn-primary ${page === pageactual ? 'active' : null}`}>{page}</button>)}
                         </div>
                    </div>
               </div>
          </div>
     );
}
 
export default Botones;