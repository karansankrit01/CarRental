import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import Layout from './pages/Owner/Layout';
import AddCar from './pages/Owner/AddCar';
import ManageBooking from './pages/Owner/ManageBooking';
import ManageCars from './pages/Owner/ManageCars';
import DashBoard from './pages/Owner/DashBoard';
import Login from './components/Login';
import { useState } from 'react';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin} />}
     
     { !isOwnerPath && <Navbar setShowLogin={setShowLogin} />}


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/car-details/:id' element={<CarDetails />} />
      <Route path='/my-bookings' element={<MyBookings />} />

      <Route path='/owner' element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path='add-car' element={<AddCar/>}/>
        <Route path='manage-cars' element={<ManageCars/>}/>
        <Route path='manage-bookings' element={<ManageBooking/>}/>


      </Route>
    </Routes>
    { !isOwnerPath && <Footer />}
    </>
  )
}

export default App
