import React, { Component } from "react";
import Img from "./Img";

export class Class_state extends Component {
  constructor() {
    super();
    this.state = {
      name:"Nimje",  
      username: "jay201",
      age: 20,
      number: 1,
      isImage: true
    };
  }
  render() {
    return (
    <div className='container mt-5'>
        <button onClick={()=>this.setState({name:"Jay Nimje"})}>Change</button>
        <h1>{this.state.name}</h1>
        <hr/>
        <button onClick={()=>this.setState({username:"Jay@1001",age:21})}>Change</button>
        <h1>Hi may user name is {this.state.username} and my age is {this.state.age}</h1>

        <hr/>

        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>

        <hr/>

        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>Show</button>
        <button onClick={()=>this.setState({isImage:!this.state.isImage})}>Hide/Show</button>

        <hr/>

        { this.state.isImage ? <Img/> : null}
    </div>
    )
  }
}

export default Class_state;
