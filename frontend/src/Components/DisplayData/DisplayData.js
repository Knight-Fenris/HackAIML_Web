import React, { useEffect } from 'react'
import Form from '../Form/Form'
import { InnerLayout } from '../../Styles/Layout'
import styled from 'styled-components'
import DisplayItem from './DisplayItem'
import { useGlobalContext } from '../../Context/globalContext'

function DisplayData() {
  

  const {names,sites, getData} = useGlobalContext()

  useEffect(()=>{
    getData()
  },[])
  return (
    <DisplayStyled>
      <InnerLayout>
        <div className="form-con">
          <Form/>
        </div>
        <div className="result-con">
        {sites.map((site)=>{
          const {_id, user, url, patterns} = site;
          // console.log(_id)
          return <DisplayItem
            key={_id}
            id ={_id}
            url = {url}
            pattern_ar={names}
            pattern_val={patterns}
          />
        })}
        </div>
      </InnerLayout>
    </DisplayStyled>
  )
}

const DisplayStyled = styled.div`
  display: flex;
  overflow: auto;
  .form-con{
    border: 2px solid #000;
  }

`

export default DisplayData
