import React from 'react'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'
import  Navbar1 from './components/navbar/Navbar1'


function RootLayout() {
  return (
    <div>
      <Navbar1 />
    <Outlet />
    <Footer />
    </div>
  )
}

export default RootLayout