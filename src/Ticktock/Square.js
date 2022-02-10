import react,{Component} from "react";
import './Game.css';


class Square extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }


  export default Square;