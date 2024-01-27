import React from 'react'

import styled from 'styled-components'
import {useGlobalContext} from '../../Context/globalContext'
import SiteItem from './SiteItem'
import { useEffect } from 'react'



function Scans() {

  const {getData,sites, names} = useGlobalContext()
  
  useEffect(() => {
    getData()
  },[]
  )

  return (
    <ScansStyled>
      <div className='siteData'>
        {sites.map((site)=>{
          const {_id, user, url, patterns} = site;
          return <SiteItem
            key={_id}
            user={user}
            url = {url}
            pattern_id={1}
            pattern_name={"False Urgency"}
          />
          
        })}
      </div>
    </ScansStyled>
  )
}

const ScansStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    display:flex;
    .siteData{
      flex:1;
    }

    @media(max-width:512px){
        width:100%;
        height: 30%;
        font-size:50%;
        display: block;
        border-radius: 0 0px 0px 0;
        align-item:center;
    }

    @media(min-width:512px) and (max-width:1024px){
        width:100%;
        height: 50%;
        font-size:50%;
        display: block;
        border-radius: 0 0px 0px 0;
        align-item:center;
        padding-left:35%;
    }
`;

export default Scans
