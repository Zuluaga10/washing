import React, { useReducer} from 'react'
import { DashboardRoutes } from './routers/DashboardRoutes'
import { RentalContext } from './context/RentalContext';
import { rentalReducer } from './reducers/rentalReducer';
import { rental } from './data/rental';

export const WashingApp = () => {

  const [state, dispatch] = useReducer(rentalReducer, rental);

  return (

    <RentalContext.Provider value={{state,dispatch}}>
        <DashboardRoutes />
    </RentalContext.Provider>
    
  )
}

