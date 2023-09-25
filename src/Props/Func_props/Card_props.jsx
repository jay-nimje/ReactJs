import React from 'react'

function Card_props({img,title,desc}) {
  return (
    <>
    <div className="col md-3">
    <div className="card" style={{width: 400 }}>
      <img className="card-img-top" src= {img} alt="Card image" style={{width: '100%', height: '250px'}} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-primary">See Profile</a>
      </div>
    </div>
  </div>
</>

  )
}

export default Card_props