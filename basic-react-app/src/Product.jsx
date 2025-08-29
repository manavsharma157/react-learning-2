import React from 'react'
import './Product.css'

export default function product({title, price=1, features, features2}) {
    // const list = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      <p>{features.map((feature) => <li>{feature}</li>)}</p>
      <p>{features2.b}</p>
    </div>
  )
}
