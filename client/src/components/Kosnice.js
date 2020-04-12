import React, { useContext, useEffect } from 'react'
import { globalContext } from './context/contextKosnice'
import Kosnica from './Kosnica'
import Spinner from './Spinner'

export default function Kosnice() {
    const {kosnice,getKosnice,loading}=useContext(globalContext)
    useEffect(()=>{
        getKosnice()
    },[])
    if(loading){
        return <Spinner/>
    }else{
    return (
      <div className="row">
          {kosnice.map(kosnica=><Kosnica kosnica={kosnica} key={kosnica._id}/>)}
      </div>
    )}
}
