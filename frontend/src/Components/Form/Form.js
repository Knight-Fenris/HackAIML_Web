//change for to htmlFor
//change class to className


import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useGlobalContext} from '../../Context/globalContext';
import Button from '../Button/Button';
import {plus} from '../utils/icons';


function Form() {
    const {addIncome, getIncome,error,setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title:'',
        amount:'',
        category:'',
        description:'',
        date:''
    })

    const { title,amount,category,description,date } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]:e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        getIncome()
        setInputState({
            title:'',
            amount:'',
            category:'',
            description:'',
            date:''
        })
    }
    return (
        <FormStyled onSubmit ={handleSubmit}>
            {error && <p className='error'>{error}</p>}
                <div className="input-control">
                    <input type="text"
                    value = {title}
                    name = {'title'}
                    placeholder='Search'
                    onChange={handleInput('title')}
                    />
                    <Button
                    name = {'Search'}
                    icon = {plus}
                    bPad = {'.8rem 1.6rem'}
                    bRad = {'30px'}
                    bg = {'var(--color-accent)'}
                    color = {'#fff'}
                    />
                </div>
                  
        </FormStyled>
    )
}

const FormStyled = styled.form`
    position: relative;
    width: 100%;
            
    .input-control{
        position: relative;
        transition: all .4s ease-in-out;
    }
    .input-control input{
        width: 100%;
        padding: .7rem 1rem;
        width:100%;
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        /* padding: .5rem 1rem; */
        border-radius: 30px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control Button{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }

`

export default Form
