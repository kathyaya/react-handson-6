import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from './StudentContextapi';
import './Styling/Table.css'

const Table = () => {

  const Student = useContext(StudentContext).entries;
//   console.log(Student);
  return (
    <div>
        <table  className='table'>
            <thead >
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
            </thead>
            <tbody>
                {
                    Student.map((ele,index)=>{
                        return(
                            <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td>{ele.course}</td>
                                <td>{ele.batch}</td>
                                <td><Link to='/Edit' state={{data:index}}>Edit</Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table