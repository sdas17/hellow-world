import React ,{Component} from "react";
class Msg extends Component{
    constructor(){
        super()
            this.state={
                  message:"hellow"
            }
        
    }
    changemessage(){
        this.setState({
            message:"thank you suscribe"
        }
        )
    }
    render(){
        return (<div>
           <h1>
        {this.state.message}
        <button onClick={()=>this.changemessage()}>subscribe</button>
            </h1>
        </div>
        )
    }
}
export default  Msg