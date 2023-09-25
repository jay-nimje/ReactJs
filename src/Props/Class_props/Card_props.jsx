import React, { Component } from 'react'

export class Card_props extends Component {

  constructor(props){
    super(props)
    this.props=props;
  }
  render() {
    return (
      <div className="col md-3">
      <div className="card" style={{width: 400 }}>
        <img className="card-img-top" src= {this.props.img} alt="Card image" style={{width: '100%', height: '250px'}} />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.desc}</p>
          <a href="#" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Card_props