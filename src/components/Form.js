import React, { useState } from 'react';
import './form.css'

const Form = (props) => {

    const [entredName, setName] = useState();
    const [entredEducation, setEducation] = useState();
    const [entredDate, setDate] = useState();
    const [gender, setGender] = useState();


    const nameHandler = (event) => {
        setName(event.target.value);

    }

    const educationHandler = (event) => {
        setEducation(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const genderHandler = (event) => {

        setGender(event.target.value);

    }

    const submitMe = (event) => {
        event.preventDefault();
        const data = {
            name: entredName,
            education: entredEducation,
            date: new Date(entredDate),
            gender: gender

        }

        console.log(data)
        setName("")
        setEducation("")
        setDate("")
        setGender("")
    }


    return (
        <form className='formCard' onSubmit={submitMe}>
            <div className='userName content'>
                <label>Name: </label>
                <input type='text' value={entredName} onChange={nameHandler} />
            </div>
            <div className='education content'>
                <label>Education: </label>
                <input type='text' value={entredEducation} onChange={educationHandler} />
            </div>
            <div className='dof content' >
                <label>Date Of Birth: </label>
                <input type='date' value={entredDate} onChange={dateHandler} />
            </div>
            <div className='gender content'>
                <label>Gender: </label>
                <input type='radio' name="gender" value='female' onClick={genderHandler} />
                <label>Female</label>
                <input type='radio' name="gender" value='Male' onClick={genderHandler} />
                <label>Male</label>
            </div>
            <div className='content'>
                <button className='content' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Form;