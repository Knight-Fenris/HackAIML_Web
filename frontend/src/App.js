import bg from './img/bg.png';
import styled from 'styled-components';
import { MainLayout } from './Styles/Layout';
import Orb from './Components/Orb/orb';
import Navigation from './Components/Navigation/Navigation';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import { useGlobalContext } from './Context/globalContext';
import Form_Feedback from './Components/Form/Form_Feedback';
import Ex_Form from './Components/Form/Exp_Form';
import DisplayData from './Components/DisplayData/DisplayData';


function App() {
  

  // console.log("idk")
  const global = useGlobalContext()
  // console.log(global)

  const {active, setActive} = global
  // revamp active setactive in nav to that of global context

  

  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <DisplayData/>
      case 3:
        return <Ex_Form/>
      case 4:
        return <Form_Feedback/>
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
