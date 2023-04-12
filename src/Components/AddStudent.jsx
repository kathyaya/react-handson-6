import React from 'react'
import './Styling/Edit.css'
import { useContext } from 'react';
import StudentContext from './StudentContextapi';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    // const Student = useContext(StudentContext).entries;
    const updateFunction = useContext(StudentContext).UpdateFunction;
    const navigate = useNavigate();
    //console.log("Index ",index);
    var tempObj = {
                name:"",
                age:"",
                course:"",
                batch:""
            };

    const HandleOnChnage = (event)=>{
        tempObj = {...tempObj,[event.target.name]:event.target.value};
        console.log(tempObj);
    }
 
    const OnClickUpdate= ()=>{
        updateFunction((oldObj)=>{
            // console.log("OldObj : ", oldObj);
            oldObj.push(tempObj);
            return oldObj;
        });
        navigate(-1);
    }
 
    const OnClickCancel= ()=>{
        navigate(-1);
    }

  return (
    <>
        <div className='conatainer'>
            <div className='flex-items'>
                <label htmlFor="Name">Name :</label> <br />
                <input type="text" name='name' onChange={HandleOnChnage} placeholder='Enter Student Name'/>
            </div>
            <div className='flex-items'>
                <label htmlFor="Name">age :</label> <br />
                <input type="number" name='age' onChange={HandleOnChnage} placeholder='Enter Student Age' />
            </div>
            <div className='flex-items'>
                <label htmlFor="Name">course :</label> <br />
                <input type="text" name='course' onChange={HandleOnChnage} placeholder='Enter Student Course' />
            </div>
            <div className='flex-items'>
                <label htmlFor="Name">batch :</label> <br />
                <input type="text" name='batch' onChange={HandleOnChnage} placeholder='Enter Student Batch' />
            </div>
        </div>
        <div className='buttonContainer'>
            <button onClick={OnClickCancel}> Cancel</button>
            <button onClick={OnClickUpdate}> Update</button>
        </div>
    </>
  )
}

export default AddStudent
