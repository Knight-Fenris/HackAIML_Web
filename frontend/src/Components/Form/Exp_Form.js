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
            {error && <p className='error'>{error}</p>}
        {/* form elements here    */}

        </Ex_FormStyled>
    )
}

const Ex_FormStyled = styled.form`

    //css here

`

export default Ex_Form
