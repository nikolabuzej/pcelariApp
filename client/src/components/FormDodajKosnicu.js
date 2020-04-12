import React, { useState, Fragment, useContext } from 'react'
import Header from './Header'
import { globalContext } from './context/contextKosnice'


export default function FormDodajKosnicu(props) {
    const {addKosnica}=useContext(globalContext)
    const [tip,setTip]=useState('')
    const [brojKosnice,setBrojKosnice]=useState(0)
    const [brojNastavaka,setBrojNastavaka]=useState(0)
    const [poreklo,setPoreklo]=useState('')
    const [bojaMatice,setBojaMatice]=useState('')
    const [opisMatice,setOpisMatice]=useState('')
    const [opis,setOpisStanja]=useState('')
    const [datum,setDatum]=useState(new Date())
    
    const[pregledi,setPregledi]=useState([{opis:'',datum: new Date()}])
  const submitKosnica=(e)=>{
      e.preventDefault()
      const kosnica={
        tip,
        broj:+brojKosnice,
        brojNastavaka:+brojNastavaka,
        poreklo,
        opis,
        datum,
        matica:{
          boja:bojaMatice,
          opis:opisMatice
        },
       
        
        pregledi:pregledi
      }
      addKosnica(kosnica)
      
      console.log(kosnica)
  }
  
  const pregledHandler=(index,e)=>{
      e.preventDefault()
    const values = [...pregledi];
    if (e.target.name === "opis") {
      values[index].opis = e.target.value;
    } else {
      values[index].datum = e.target.value;
    }

    setPregledi(values);
  }
const addFormPregled=(e)=>{
    e.preventDefault()
    const values=[...pregledi]
    values.push({opis:'',datum: ''})
    setPregledi(values)
}
const deleteFormPregled=(index)=>{
    const values=[...pregledi]
    values.splice(index,1)
    setPregledi(values)
}
 
    return (
       
 
     
     <div className='row'>
        <Header/>
         <form className='col s12' onSubmit={(e)=>submitKosnica(e)}>
         <div className="input-field col s4">
          <input type='text' value={tip} onChange={(e)=>setTip(e.target.value)}/>
          <label>Tip</label>
        </div>
        <div className="input-field col s4">
          <input type='number' value={brojKosnice} onChange={(e)=>setBrojKosnice(e.target.value)}/>
          <label>Broj Kosnice</label>
        </div>
        <div className="input-field col s4">
          <input type='number' value={brojNastavaka} onChange={(e)=>setBrojNastavaka(e.target.value)}/>
          <label>Broj Nastavaka</label>
        </div>
        <div className="input-field col s4">
          <input type='text' value={poreklo} onChange={(e)=>setPoreklo(e.target.value)}/>
          <label>Poreklo</label>
        </div>
        <div className="input-field col s4">
          <input type='text' value={bojaMatice} onChange={(e)=>setBojaMatice(e.target.value)}/>
          <label>Boja Matice</label>
        </div>
        <div className="input-field col s4">
          <input type='text' value={opisMatice} onChange={(e)=>setOpisMatice(e.target.value)}/>
          <label>Opis Matice</label>
        </div>
        <div className="input-field col s4">
          <input type='text' value={opis} onChange={(e)=>setOpisStanja(e.target.value)}/>
          <label>Opis Stanja</label>
        </div>
        <div className="input-field col s4">
          <input type='date' value={datum} onChange={(e)=>setDatum(e.target.value)}/>
          <label>Datum</label>
        </div>
        <div className="col s4">
          <button className='btn'>Dodaj</button>
        </div>
        
            {pregledi.map((pregled,index)=>(
                <Fragment key={`${pregledi}~${index}`}>
                <div className='row'>
                <h4 className='col s12'>Dodaj Preglede</h4>
                <div className="input-field col s4">
                  <input type='text' id='opis' name='opis' value={pregled.opis} onChange={e=>pregledHandler(index,e)}/>
                  <label>Opis</label>
                </div>
                <div className="input-field col s4">
                  <input type='date' id='datum' name='datum' value={pregled.datum} onChange={e=>pregledHandler(index,e)}/>
                  <label>Datum</label>
                </div>
                <button className='btn col s1 red' onClick={index=>deleteFormPregled(index)}><i className="material-icons">delete</i></button>
                </div>
                </Fragment>
            ))}
            <button className='btn col s12' onClick={(e)=>addFormPregled(e)} >Dodaj Pregled</button>
        
           
                
            
         </form>
      </div>
    )
    }
