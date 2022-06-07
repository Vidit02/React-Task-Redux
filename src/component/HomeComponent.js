import React from 'react'

export const HomeComponent = (props) => {
  return (
    <div>
        <button class="btn btn-outline-primary" onClick={()=>props.addToCartHandler({productname:"book1",price :"1000"})}>Add To Cart</button>
    </div>
  )
}
