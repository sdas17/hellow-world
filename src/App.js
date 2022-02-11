import './App.css';
import Greet from './Componet/Greet'
import Welcome from './Componet/welcome';
import Msg from './Componet/Msg';
import Board from './Ticktock/Board'
import Game from './Ticktock/Game'
import Square from './Ticktock/Square'
import Counter from './Componet/Counter';
import Functional from './Componet/Functional';
import ClassClick from './Componet/ClassClick';
import EventBind from './Componet/EventBind';
import Parent from './Componet/Parent';
import UserGreeting from './Componet/UserGreeting';
import Name from './Componet/Name';
import Namelist from './Componet/Namelist';
function App() {
  return (
    <div className="App">
      {/* <Name/> */}
      <Namelist/>
      {/* <Functional/> */}
      {/* <EventBind/> */}
      {/* <Parent/> */}
      {/* <ClassClick/>      <Counter/> */}
     {/* <Greet name="subham" heroname="srk">
       <p>this is children compiione</p>
     <button>Action</button> */}
     {/* <Greet name="karan" heronmae="rohit"/> */}
{/*       
     <Welcome name="karan" heroname="sher"/>
     <Welcome name="ram" heroname="akshey"/>
     <Welcome name="rohitya" heroname="srk"/>
     <Welcome name="lohiya" heroname="lohiya"/> */}
     {/* <Msg/> 
     <Board/>
     <Game/>
     <Square></Square> */}
     {/* <UserGreeting/> */}
    </div>
  );
}

export default App;
