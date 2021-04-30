import React, { useContext, useEffect } from 'react'
import { ControversyContext } from '../context/ControversyProvider.js'
import ControversyList from './ControversyList.js'


export default function Public(){
  

  const { getAllReviews, controversies} = useContext(ControversyContext)

  useEffect(()=>{
    getAllReviews()
  },[])

//console.log(useContext(ControversyContext))
  return (
    <div className="container public">
      <h4>Add Your Thoughts to the Reviews and Comments Here:</h4>
      <ControversyList controversies={controversies} />
    </div>
  )
}