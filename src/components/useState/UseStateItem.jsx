import React from 'react'

const UseStateItem = ({id, completed,name,lastName,phonenumber}) => {
  return (
    <div className=''>
      <h1>{name}</h1>
      <h1>{lastName}</h1>
      <h1>{phonenumber}</h1>
      
    </div>
  )
}

export default UseStateItem
