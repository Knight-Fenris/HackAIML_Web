import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import Scans from './Scans'
import {dollar} from '../utils/icons'
import { useGlobalContext } from '../../Context/globalContext'
import History from './History'

function Dashboard() {
  const {getData,sites, names} = useGlobalContext()
  useEffect(() => {
    getData()
  },[]
  )

  // console.log(names)
  return (
    
    <DashboardStyled>
      <InnerLayout>
        <h1>Recent Scans</h1>
        
        <div className="dash-con">
          <div className="site-con">
              <Scans/>
          </div>
          <div className="stats-con">
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {0}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {0}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {0}
                </p>
              </div>
            </div>
            <div className="history-con">
              <History/>
                  <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                  <div className="salary-item">
                      <p>
                          ${0}
                      </p>
                      <p>
                          ${0}
                      </p>
                  </div>
                  <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                  <div className="salary-item">
                      <p>
                          ${0}
                      </p>
                      <p>
                          ${0}
                      </p>
                  </div>
            </div>
          </div>
          
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
overflow: hidden;
.dash-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        overflow: hidden;
        .site-con{
            grid-column: 1 / 4;
            height: 100%;
            overflow-y: scroll;
            scroll-behavior: smooth;
            scrollbar-width: thin;
            min-width: 500px;
            /* ::-webkit-scrollbar-corner: round; */
            z-index: 1;
        }
        .stats-con{
          grid-column: 4/-1;
          overflow: hidden;
          /* height:400px; */
          .amount-con{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 2rem;
            .income, .expense{
                grid-column: span 2;
            }
            .income, .expense, .balance{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                padding: 1rem;
                p{
                    font-size: 3.5rem;
                    font-weight: 700;
                }
            }

            .balance{
                grid-column: 2 / 4;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    color: var(--color-green);
                    opacity: 0.6;
                    font-size: 4.5rem;
                }
            }
          } 
          .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
          }
        }

        @media(max-width:512px){
          //border: 2px solid green;
          width:100%;
          height: 10%;
          font-size:30%;
          display: block;
          border-radius: 0 0px 0px 0;

        }
        @media(min-width:512px) and (max-width:1024px){
          //border: 2px solid green;
          width:100%;
          height: 10%;
          font-size:50%;
          display: block;
          border-radius: 0 0px 0px 0;
          Scans{
            border: 2px solid blue;
          }
        }
        
        
    }
`

export default Dashboard
