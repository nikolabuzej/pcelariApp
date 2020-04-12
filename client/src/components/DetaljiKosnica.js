import React, { useEffect, useState, Fragment, useContext } from 'react'
import Spinnner from './Spinner'
import Header from './Header'

import { globalContext } from './context/contextKosnice'

export default function DetaljiKosnica(props) {
    const{submitPregled,getKosnica,loading,kosnica}=useContext(globalContext)
    
  
    const[pregled,setPregled]=useState({opis:'',datum:''})
    const pregledHandler=(e)=>{
        e.preventDefault()
      const values = {...pregled};
      if (e.target.name === "opis") {
        values.opis = e.target.value;
      } else {
        values.datum = e.target.value;
      }
  
      setPregled(values);
    }
  
  const submitHandler=(e)=>{
      e.preventDefault()
      console.log(pregled)
      submitPregled({...pregled},kosnica._id)
       
  }
    useEffect(()=>{

        getKosnica(props.match.params.id)
        
    },[submitPregled])
    if(loading===true){
        return <Spinnner/>
    }else{

    return (
        <div>
            <Header/>
            <ul className='collection center'>
            <li className='collection-item'><h2>Broj kosnice: {kosnica.broj}</h2></li>
            <li className='collection-item'>Tip kosinice:{kosnica.tip}</li>
            <li className='collection-item'> Broj nastavaka :{kosnica.brojNastavaka?kosnica.brojNastavaka:'nema'}</li>
            <li className='collection-item'>Poreklo: {kosnica.poreklo?kosnica.poreklo:'nema'}</li>
            <li className='collection-item'>Opis kosnice:{kosnica.opis?kosnica.opis:'nema'}</li>
            <li className='collection-item'>Datum :{kosnica.datum?kosnica.datum:'nema'}</li>
            <li className='collection-item'><ul className='collection with-header'>
                <li className='collection-header'><h4>Matica</h4></li>
                        <li className='collection-item'>Boja matice:{kosnica.matica.boja!==undefined?kosnica.matica.boja:'nema'}</li>
                        <li className='collection-item'>Opis matice:{kosnica.matica.opis?kosnica.matica.opis:'nema'}</li></ul></li>
            <li className='collection-item'>{kosnica.pregledi?kosnica.pregledi.map((pregled)=>{
                return (<Fragment key={pregled._id}>
                <ul className='collection with-header'>
                    <li className='collection-header'>Pregled</li>
                    <li className='collection-item'>Opis pregleda: {pregled.opis}</li>
                    <li className='collection-item'>Datum pregleda: {pregled.datum}</li>
                </ul></Fragment>)
            }):'nema'}</li> 
            </ul>
            <form className='row' onSubmit={(e)=>submitHandler(e)}>
            
                
                <div className='row'>
                <h4 className='col s12'>Dodaj Pregled</h4>
                <div className="input-field col s4">
                  <input type='text' id='opis' name='opis' value={pregled.opis} onChange={e=>pregledHandler(e)}/>
                  <label>Opis</label>
                </div>
                <div className="input-field col s4">
                  <input type='date' id='datum' name='datum' value={pregled.datum} onChange={e=>pregledHandler(e)}/>
                  <label>Datum</label>
                </div>
               
                </div>
              
            
            <button className='btn col s12 left'><i className='material-icons'>add</i></button>
            </form>
        </div>
    )}
}
