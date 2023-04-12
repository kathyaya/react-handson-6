import React from 'react'
import Table from './Table'
import './Styling/Student.css'
import { useNavigate } from 'react-router-dom'


const Students = () => {
  const navigate = useNavigate();
  return (
    <>  
        <div className='container'>
            <h1 className='StudentDeatails'>Student Details</h1>
            <button onClick={()=>{navigate('/AddStudent')}} className='AddnewStudent'>Add New Student</button>
        </div>
        <Table/>
    </>
  )
}

export default Students