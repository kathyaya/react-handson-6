import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StudentContext from './StudentContextapi';
import { useContext } from 'react';
import './Styling/Edit.css';

const Edit = () => {
    const index = useLocation().state.data;
    const Student = useContext(StudentContext).entries;
    const updateFunction = useContext(StudentContext).UpdateFunction;
    const navigate = useNavigate();
    //console.log("Index ",index);
    var tempObj = {name:Student[index].name,age:Student[index].age,course:Student[index].course,batch:Student[index].batch};
    const HandleOnChnage = (event)=>{
        tempObj = {...tempObj,[event.target.name]:event.target.value};
        console.log(tempObj);
    }
 
    const OnClickUpdate= ()=>{
        updateFunction((oldObj)=>{
            oldObj[index]=tempObj;
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
                <input type="text" name='name' onChange={HandleOnChnage} placeholder={Student[index].name}/>
            </div>
            <div className='flex-items'>
                <label htmlFor="Name">age :</label> <br />
                <input type="number" name='age' onChange={HandleOnChnage} placeholder={Student[index].age} />
            </div>
            <div className='flex-items'>
                <label htmlFor="Name">course :</label> <br />
                <input type="text" name='course' onChange={HandleOnChnage} placeholder={Student[index].course} />
            </div>
            <div className='flex-items'>
                <label htmlFor="Name">batch :</label> <br />
                <input type="text" name='batch' onChange={HandleOnChnage} placeholder={Student[index].batch} />
            </div>
        </div>
        <div className='buttonContainer'>
            <button onClick={OnClickCancel}> Cancel</button>
            <button onClick={OnClickUpdate}> Update</button>
        </div>
    </>
  )
}

export default Edit