import React from 'react'
import styled from 'styled-components'
import { bitcoin, calender, card, comment, dollar, freelance, money, piggy, stocks, trash, users, yt, book, food, medical,tv,takeaway,clothing,circle } from '../utils/icons'
import Button from '../Button/Button'
import { dateFormat } from '../utils/dateFormat'

function DisplayItem({
  id,
  url,
  pattern_ar, 
  pattern_val
}) {
  //set max value as id and name
  const pattern_id = 1;
  const pattern_name = "idk";
  const patternIcon = () =>{
    switch(pattern_id){
        case 1: return money
        case 'freelacing': return freelance
        case 'investments': return stocks
        case 'stocks': return users
        case 'bitcoin': return bitcoin
        case 'bank': return card
        case 'youtube': return yt
        case 'other': return piggy
        default: return ''
    }
  }

  return (
    <DisplayItemStyled>
      <div className="icon">
        {patternIcon()}
      </div>
      <div className="content">
          <h5>{url}</h5>
          <div className="inner-content">
              <div className="text">
                  {/* <p>User: {user}</p> */}
                  <p>Date Scanned: </p>
                  <p>Major Pattern: {pattern_name}</p>

              </div>
              <div className="btn-con">
                  <Button
                  icon = {trash}
                  bPad ={'1rem'}
                  bRad = {'50%'}
                  bg={'var(--primary-color)'}
                  color={'#fff'}
                  iColor={'#fff'}
                  hColor = {'var(--color-green)'}
                  // onClick={() =>deleteItem(id)}
                  />
              </div>
          </div>
      </div>
      <div className="pattern-con">
        {pattern_ar.map((pattern, index)=>{
          const val = pattern_val[index];
          return(<p key={index}>{pattern} : {val}</p>)
        })}
      </div>
      
    </DisplayItemStyled>
  )
}

const DisplayItemStyled = styled.div`
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius:20px;
  padding:1rem;
  margin-bottom:1rem;
  display:flex;
  align-items:center;
  gap:1rem;
  width:100%;
  color:#222260;
  .icon{
      width:80px;
      height:80px;
      border-radius:20px;
      background: #F5F5F5;
      display:flex;
      align-items:center;
      justify-content:center;
      border: 2px solid #FFFFFF;
      i{
          font-size:2.6rem;
      } 
  }
  .content{
      flex:1;
      display:flex;
      flex-direction: column;
      gap:.2rem;
      h5{
          font-size:1.3rem;
          padding-left:2rem;
          position:relative;
          &::before{
              content: '';
              position:absolute;
              left:0;
              top:50%;
              transform:translateY(-50%);
              width:.8rem;
              height:.8rem;
              border-radius: 50%;
              background: ${props=>props.indicator};
          }
      }
      .inner-content{
          display:flex;
          justify-content: space-between;
          align-items: center;
          .text{
              display: flex;
              /* justify-content: space-between; */
              align-items: center;
              gap:1.5rem;
              p{
                  display: flex;
                  align-items:center;
                  gap:.5rem;
                  color:var(--primary-color);
                  opacity:0.8;
              }
          }
      }
  }

`

export default DisplayItem
