import React from 'react'

export default function UserForm(props){
  const { name, lastName, saveHandler, handleChange} = props
  return(
    <>
      <input type="text" placeholder="Name" name="name" 
      value={ name }
      onChange={ handleChange }/>
      <input type="text" placeholder="Last Name" name="lastName" 
      value={ lastName }
      onChange={ handleChange }/>
      <button onClick={saveHandler}>"Save"</button>
    </>
  )
}