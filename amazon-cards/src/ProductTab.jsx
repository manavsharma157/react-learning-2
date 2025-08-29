import React from 'react'
import Product from './product.jsx'

export default function ProductTab() {
    // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"light-weight"</li>];
    let styles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    }
  return (
    <div style={styles}>
    
      <Product title="Mouse" idx={0}/>
      <Product title="Seb" idx={1}/>
      <Product title="Angoor" idx={2}/>
    </div>
  )
}
