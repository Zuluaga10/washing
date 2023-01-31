import React from 'react'
import { NavBar } from '../components/NavBar'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { WashingScreen } from '../components/washing/WashingScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { AddMachine } from '../components/washing/AddMachine'
import { EditMachine } from '../components/washing/EditMachine'


export const DashboardRoutes = () => {
  return (
    <>
        
        <div>

        <BrowserRouter>
            <NavBar/>
            <Routes>

                <Route path="/machineRental" element={<WashingScreen />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/addMachine" element={<AddMachine />} />
                <Route path="/washing/:id" element={<EditMachine />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/*" element={ <HomeScreen />}  />   

            </Routes>
        </BrowserRouter>  

        </div>
    
    </>
  )
}
