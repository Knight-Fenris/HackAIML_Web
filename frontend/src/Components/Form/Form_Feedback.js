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
            <div className="title">
                Feedback Form
            </div>
            <fieldset>
                <label class="doubt"></label>
                    <select class="select" required>
                        <option value="">Select any one</option>
                        <option></option>
                        <option></option>
                    </select>
            </fieldset>
            <fieldset>
                <input type="text" class="input-one"/>
                <input type="text" class="input-two"/>
            </fieldset>
            <fieldset>
                <legend>Which of the following does not exist?</legend>
                <input type="checkbox" name="dp" id="false" value="false" class="inline"/><label for="false">False Urgency</label>
                <input type="checkbox" name="dp" id="sneaking" value="sneaking" class="inline"/><label for="sneaking">Basket sneaking</label>
                <input type="checkbox" name="dp" id="shaming" value="shaming" class="inline"/><label for="shaming">Confirm shaming</label>
                <input type="checkbox" name="dp" id="forced" value="forced" class="inline"/><label for="forced">Forced action</label>
                <input type="checkbox" name="dp" id="trap" value="trap" class="inline"/><label for="trap">Subscription trap</label>
                <input type="checkbox" name="dp" id="interference" value="interference" class="inline"/><label for="interference">Interface interference</label>
                <input type="checkbox" name="dp" id="bait" value="bait" class="inline"/><label for="bait">Bait and switch</label>
                <input type="checkbox" name="dp" id="drip" value="drip" class="inline"/><label for="drip">Drip pricing</label>
                <input type="checkbox" name="dp" id="disguised" value="disguised" class="inline"/><label for="disguised">Disguised advertisement</label>
                <input type="checkbox" name="dp" id="nagging" value="nagging" class="inline"/><label for="nagging">Nagging</label> 
                  
                     
            </fieldset>

        </FormStyled>
    )
}

const FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title{
        margin: 2rem 2rem 0 2rem;
    }

    fieldset {
        border: none;
        padding: 2rem 0 0 0 ;
        margin: 0 2rem;
    }

    .input-one{
        margin-bottom: 2rem;
    }
  
    label {
        display: block;
        margin: 0.5rem 0;
    }

    .inline {
        width: unset;
        margin: 0 0.5em 0 1em;
        vertical-align: middle;
    }

    input, select {
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
        width: 75%;

    }

    .dp {
        text-align: left;

    }

    label {
        margin-top: -25px;
        margin-left: 35px;
    }
`

export default Form
