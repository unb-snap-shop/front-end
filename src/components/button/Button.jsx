import React from 'react';

const Button = ({ text, onClick, type }) => {
  const className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  return (
      <button onClick={onClick} className={className}>
          {text}
      </button>
  )
}

export default Button;
