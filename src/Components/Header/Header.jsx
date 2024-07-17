import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src='https://images.unsplash.com/photo-1719934665180-07ce0daa90e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}
