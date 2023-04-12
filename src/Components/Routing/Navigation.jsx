import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/Navigation.css'

const Navigation = () => {
  return (
    <div className='NavBar'>
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/Student' >Student</Link>
        <Link className='link' to='/ContactUS' >ContactUS</Link>
    </div>
  )
}

export default Navigation