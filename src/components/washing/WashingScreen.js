import React from 'react'
import { WashingList } from './WashingList'


export const WashingScreen = () => {
  return (
    <div style={{alignContent: "center"}}>
      <h2 
        style={{fontFamily: "Roboto,sans-serif",fontWeight: 'bold',fontSize: "30px", justifyContent:'center'}}>
        Alquiler de lavadoras</h2>
      <WashingList />
    </div>
    

  )
}
