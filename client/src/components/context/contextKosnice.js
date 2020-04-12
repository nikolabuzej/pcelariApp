import React, { createContext, useReducer } from 'react'
import { reducerKosnice } from './reducerKosnice'
import axios from 'axios'
export const globalContext=createContext()
const initState={
    kosnice:[],
    loading:true,
    error:null,
    kosnica:{}
}

export  function Provider(props) {
    const [state,dispatch]=useReducer(reducerKosnice,initState)

    async function getKosnice(){
        try{
        const kos=await axios.get('/api/kosnice')
        dispatch({
            type:'GET_KOSNICE',
            payload:kos.data.data
        })}
        catch(err){
            dispatch({type:'ERROR',payload:err.response.data.error})
        }

    }
    async function addKosnica(kosnica){
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            await axios.post('/api/kosnice',kosnica,config)
            dispatch({type:'ADD_KOSNICA',payload:kosnica})
        } catch (error) {
            dispatch({type:'ERROR',payload:error.response.data.error})
        }
    }
    async function deleteKosnicaHandler(id){
        try {
            await axios.delete(`/api/kosnice/${id}`)
            dispatch({type:'DELETE_KOSNICA',payload:id})
        } catch (error) {
            dispatch({type:"ERROR",payload:error.data.error})
        }
    }
    async function submitPregled(pregled,id){
        try{
            await axios.post(`/api/kosnice/addPregled/${id}`,pregled)
        }catch(error){
            dispatch({type:"ERROR",payload:error.data.error})
        }
    }
    async function getKosnica(id){
        try{
            
            const kosnica=await axios.get(`/api/kosnice/displayKosnica/${id}`)
            dispatch({type:'GET_KOSNICA',payload:kosnica.data.data})
        }catch(error){

        }
    }
    function setLoader(){
        dispatch({type:'SET_LOADER',payload:true})
    }

    return (
        <globalContext.Provider value={{setLoader,kosnice:state.kosnice, getKosnice,addKosnica,deleteKosnicaHandler,loading:state.loading,submitPregled,getKosnica,kosnica:state.kosnica}}>
            {props.children}

        </globalContext.Provider>
            
       
    )
}
