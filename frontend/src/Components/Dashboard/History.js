import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context/globalContext';

function History() {
    // const {transHistory} = useGlobalContext()

    // const[...history] = transHistory()
    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {/* {history.map((item)=>{
                const {_id,title,amount,type} = item
                return(
                    
                    <div key={_id} className="history-item">
                        <p style = {{
                            color:type ==='expense'?'var(--color-red)':'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style = {{
                            color:type ==='expense'?'var(--color-red)':'var(--color-green)'
                        }}>
                            {
                                type==='expense'?`-${amount}`:`+${amount}`
                            }
                        </p>
                    </div>
                )
            })} */}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media(max-width:512px){
        width:100%;
        height: 10%;
        font-size:30%;
        display: block;
        border-radius: 0 0px 0px 0;
        padding-top:20%
    }
    @media(min-width:512px) and (max-width:1024px){
        width:100%;
        height: 10%;
        font-size:50%;
        display: block;
        border-radius: 0 0px 0px 0;
        padding-top:20%
    }

    
`;

export default History
