import React from 'react'
import './home.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured'
import PropertyList from '../../Components/propertyList/PropertyList'
import FeaturedProperty from '../../Components/featuredProperty/FeaturedProperty'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse my property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProperty/>
        <MailList />
        <Footer/>
        
      </div>
     
    </div>
  )
}
