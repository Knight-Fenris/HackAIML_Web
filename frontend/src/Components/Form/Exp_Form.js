import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useGlobalContext} from '../../Context/globalContext';
import Button from '../Button/Button';
import {plus} from '../utils/icons';


function Ex_Form() {
    const {error,setError} = useGlobalContext()
    // const [inputState, setInputState] = useState({
    //     title:'',
    //     amount:'',
    //     category:'',
    //     description:'',
    //     date:''
    // })


    const handleInput = name => e => {
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <Ex_FormStyled onSubmit ={handleSubmit}>
            {error && <p classNameName='error'>{error}</p>}
            <h1>Tell us about your experience</h1>
            <div>
                {/* <legend for="Name">Your Name</legend>*/}<input type="text" className="intro" name="Name" placeholder="Enter your Name" required/>
            </div>
            <div> 
                {/* <legend for="age">Your Age</legend>*/}<input type="number" className="intro" name="age" min="10" max="120" placeholder="Enter your Age" required/> 
            </div>
            <div>
                <legend htmlFor="gender">Your Gender</legend>
                <select>
                    <option value="">Select an option</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div>
                <legend htmlFor="exp">How was your experience?</legend>
                <label><input name="exp" value="ex" type="radio" className="exp" required/>Excellent</label>
                <label><input name="exp" value="vgud" type="radio" className="exp" />Very Good</label>
                <label><input name="exp" value="gud" type="radio" className="exp" />Good</label>
                <label><input name="exp" value="sat" type="radio" className="exp" />Satisfactory</label>

                <legend htmlFor="des"></legend>
                <textarea name="exp" placeholder="Describe your experience..." rows="5" cols="36"></textarea>

            </div>
            <input type="submit" value="Submit"></input>

        </Ex_FormStyled>
    )
}

const Ex_FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
        font-family: inherit;
        font-size: 2em;
        padding: .5rem 2rem;
        margin: 1rem 2rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        align-items: center;
    }

    div {
        border: none;
        padding: 0%.5 0;
        margin: 0 2rem;
    }
  
    label {
        display: block;
        margin: 0.5rem 0;
    }

    input, select, textarea {
        width:75%;
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        align-items: center;
    }

    select{ 
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
        
        text-align: left;
    

    }

    .exp {
        width: unset;
        margin: 0 0.5em 0 1em;
        vertical-align: middle;
    }

    .Submit {
        background-color: green;
    }

    .Name {
        padding: 0 2rem;
    }

`

export default Ex_Form
