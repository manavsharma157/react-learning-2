import React from 'react'
import './Product.css'
import Price from './Price.jsx'

export default function product({ title , idx}) {
    // const list = features.map((feature) => <li>{feature}</li>);
    let oldPrices = [999, 1999, 2999];
    let newPrices = [499, 999, 1499];
    let description = [["Good Product", "Interesting"], ["Doctors Away", "Red Red"], ["Masti","Can be Fermented"]];
    return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price  oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  )
}
