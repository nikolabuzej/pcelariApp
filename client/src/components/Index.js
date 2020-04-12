import React from 'react'
import Header from './Header'
import Kosnice from './Kosnice'
import FormKosnica from './FormKosnica'
import { Link } from 'react-router-dom'


export default function Index() {
    
    
    return (
        <React.Fragment>

        <Header/>
       
        <FormKosnica/>
        
        <Kosnice/>
        <Link to='/addNewKosnica' className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></Link>
        </React.Fragment>
    )
}
