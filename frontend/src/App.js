import bg from './img/bg.png';
import styled from 'styled-components';
import { MainLayout } from './Styles/Layout';
import Orb from './Components/Orb/orb';
import Navigation from './Components/Navigation/Navigation';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Incomes from './Components/Incomes/Incomes';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './Context/globalContext';
import Form_Feedback from './Components/Form/Form_Feedback';
import Ex_Form from './Components/Form/Exp_Form';


function App() {
  const [active,setActive] = useState(1)

  console.log("idk")
  const global = useGlobalContext()
  console.log(global)

  

  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Form_Feedback/>
      case 3:
        return <Ex_Form/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <AppStyled className="App">
      {/* <Orb /> */}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius:32px;
    overflow: auto;
    overflow-x: hidden;
    &::webkit-scrollbar{
      width: 0;

    }
  }
`;

export default App;
