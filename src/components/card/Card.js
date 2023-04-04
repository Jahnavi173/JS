import React from 'react'
import './Card.css'

function card(props) {
  // console.log(props.products);
  return (
    <div className="card">
        <img  className='card-img-top' src={props.products?.image}    alt="No Image" />
      
     
      <div class="card-body ">
    <h5 class="card-title">{props.products?.name}</h5>
    <p class="card-text">{props.products?.description}</p>
    <p className=''>Quantity:{props.products?.quantity}ml</p>
    {/* <button className="btn btn-primary"></button> */}
  </div>
  </div>
  )
}

export default card