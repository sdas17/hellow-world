import react,{Component} from "react";
import Board from './Board';
import './Game.css';


// import Square from "./Square";

class game extends react.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
           
          </div>
        </div>
      );
    }
  }
  
  export default game;