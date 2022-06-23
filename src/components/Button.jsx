import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

// Deconstructuring button component to pass dynamic styling values 
const Button = ({ width, icon, bgHoverColor ,bgColor, color, size, text, borderRadius }) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
      <button
      onClick={() => setIsClicked(initialState)}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      >
       {icon}{text}
      </button>
  )
}

export default Button