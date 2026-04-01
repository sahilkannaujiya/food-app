import React from 'react'
import Items from './Items';
let FoodsItem = (props) => {
let {items} = props;
 
  return (
    <ul className="list-group">
        {items.map((items) => (
          //passing arg to child.
          <Items 
          key={items} 
          food ={items}
          handleBuyButton={() => console.log(`${items}Clicked`)}
          ></Items>
        ))}
        
      </ul>
    
  )
}

export default  FoodsItem;
