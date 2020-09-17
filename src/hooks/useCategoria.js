import React, {useState} from 'react';
const useCategoria = (stateinitial, categorias) => {
     const [state, changeState]  = useState(stateinitial);

     const seleccionarNoticia = () => (
          <div className="form-group">
               <select value={state} name="" id="" className="form-control form-control-lg" onChange={(e) => changeState(e.target.value)}>
                    <option value="" disabled>...Seleccionar</option>
                    {categorias.map((categoria, i) => <option key={i} value={categoria.value}>{categoria.name}</option>)}
               </select>
          </div>
     )
     return [state, seleccionarNoticia, changeState];
}
 
export default useCategoria;