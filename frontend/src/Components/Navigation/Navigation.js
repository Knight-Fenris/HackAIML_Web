import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png'
import { menuItems } from '../utils/menuItems';
import { signout } from '../utils/icons';

function Navigation({active,setActive}) {
  return (
    
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt =''/>
        <div className="text">
            <h2>XYZ</h2>
            <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item)=>{
            return <li key={item.id}
            onClick={()=>setActive(item.id)}
            className={active===item.id?'active':''}>
                {item.icon}
                <span>{item.title}</span>
            </li>
        })}
      </ul>
      <div className="bottom-nav">
        <li>
            {signout} Sign Out
        </li>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height:100%;
    background:   rgba(252,246,249,0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius:32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
      height: 100px;
      display: flex;
      align-items: center;
      gap: 1rem;
      img{
        width:80px;
        height:80px;
        border-radius: 50%;
        object-fit: cover;
        background-color: #fcf6f9;
        border: 2px solid #FFFFFF;
        padding: .2rem;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, .06);
      }
      h2{
        color: rgba(34,36,96,1);

      }
      p{
        color: rgba(34,36,96,.6);
      }
    }
    .menu-items{
      flex: 1;
      display: flex;
      flex-direction: column;
      li{
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        margin: .6rem 0;
        font-weight: 500;
        cursor: pointer;
        transition: all .4s ease-in-out;
        color: rgba(34, 34, 96, .6);
        padding-left: 1rem;
        position: relative;
        i{
            color: rgba(34, 34, 96, 0.6);
            font-size: 1.4rem;
            transition: all .4s ease-in-out;
        }
      }
    }
    .active{
      color: rgba(34,36,96,1) !important;
      i{
        color: rgba(34, 36, 96, 1) !important;
      }
      
      &::before{
        content: "";
        position: absolute;
        left: 0;
        right:0;
        width: 4px;
        height: 100%;
        background:#222260;
        border-radius: 0 10px 10px 0;
      }
    }
    @media(max-width:512px){
      width:100%;
      height: 10%;
      font-size:30%;
      display: block;
      border-radius: 0 0px 0px 0;
      padding-bottom: 10%;

      .menu-items{
        flex: 1;
        display: flex;
        flex-direction: row;
        // background-color: blue;
        font-size:0.5rem;
        li{
          border:2px solid green;
          width:50px;
          height:50px;

          position: relative;
          bottom:20%;
          right:30%;
          display: grid;
          align-items: center;
          font-weight: 500;
          cursor: pointer;
          transition: all .4s ease-in-out;
          color: rgba(34, 34, 96, .6);
          position: relative;
          i{

              border: 2px solid blue;
              width:10px;
              position:relative;
              opacity:0;
              color: rgba(34, 34, 96, 0.6);
              font-size: 0.5rem;
              
              transition: all .4s ease-in-out;
          }
        }
      }
      .nav-container{
        // background-color: red;
        display: flex;

      }
      .menu-items{
        font-size: 10px;
        margin-left:5%;
      }
      .text{
        font-size:10px;
        border:2px solid green;
        position: relative;
        bottom:30%;
      }
      .bottom-nav{
        font-size:10px;
      }
      img{
        position: relative;
        bottom:40px;
        right:20px;

      }
    }

    @media(min-width:512px) and (max-width:1024px){
      width:100%;
      height: 10%;
      font-size:50%;
      flex-direction: row;
      border-radius: 0 0px 0px 0;
      padding-bottom: 10%;

      .menu-items{
        flex: 1;
        display: flex;
        flex-direction: row;
        // background-color: blue;
        li{
          display: grid;
          grid-template-columns: 40px auto;
          align-items: center;
          margin: .6rem 0;
          font-weight: 500;
          cursor: pointer;
          transition: all .4s ease-in-out;
          color: rgba(34, 34, 96, .6);
          padding-left: 1rem;
          position: relative;
          i{
              color: rgba(34, 34, 96, 0.6);
              font-size: 1.4rem;
              transition: all .4s ease-in-out;
          }
        }
      }
      .menu-items{
        font-size: 15px;
        margin-left:5%;
      }
      .text{
        font-size:15px;
      }
      .bottom-nav{
        font-size:15px;
      }
    }
      
`;

export default Navigation
