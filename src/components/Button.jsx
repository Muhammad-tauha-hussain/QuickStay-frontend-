import React from 'react'

const Button = ({description, textColor , bgColor}) => {
  return (
    <button className={`border px-3 py-2 bg-${bgColor} text-${textColor}`}>{description}</button>
  )
}

export default Button