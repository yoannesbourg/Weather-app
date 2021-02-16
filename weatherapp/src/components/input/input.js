import React, { useState } from 'react'

const Input = ({onSearch}) => {
  const [text, setText] = useState('')

  const handleInput = (event) => {
    setText(event.target.value)
  }

  const handlePress = (event) => {
    if(event.key === 'Enter') {
      onSearch(text)
      setText('')
    }
  }

  return (
      <div className="search-box">
        <input 
          type="text"
          className="search-bar" 
          placeholder="Search..." 
          value={text}
          onChange={handleInput}
          onKeyDown={handlePress}
        />         
      </div>
  )
}

export default Input
