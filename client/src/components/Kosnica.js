import React, { useContext } from 'react'
import { globalContext } from './context/contextKosnice'
import { Link} from 'react-router-dom'



export default function Kosnica({kosnica}) {
    const {deleteKosnicaHandler,setLoader}=useContext(globalContext)
    return (
        <React.Fragment>
       
        <div className="col s4">
        <Link to={`/kosnica/${kosnica._id}`} onClick={setLoader}> <h1 className='center white'>{kosnica.broj}</h1></Link>
            <ul className="collection">
      <li className="collection-item">{kosnica.tip}</li>
    <li className="collection-item">{kosnica.brojNastavaka}</li>
    <li className="collection-item">{kosnica.poreklo}</li>
    <li className="collection-item">{kosnica.matica.boja}</li>
    <li className="collection-item">{kosnica.matica.opis}</li>
    <li className="collection-item">{kosnica.datum}</li>
    
    <li className='collection-item'><button className='btn red' onClick={()=>deleteKosnicaHandler(kosnica._id)}><i className="material-icons">delete</i></button></li>
    </ul>
        </div>
        </React.Fragment>
    )
}
