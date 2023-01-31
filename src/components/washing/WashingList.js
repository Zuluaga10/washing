import React, { useContext } from 'react'
import { RentalContext } from '../../context/RentalContext'
import { WashingCard } from './WashingCard'


export const WashingList = () => {

  const {state} = useContext(RentalContext)

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 container-washes">
            {
                state.map(item=>(
                    <WashingCard
                        key={item.id}
                        {...item}
                    />
                        
                ))
            }
    </div>
  )
}
