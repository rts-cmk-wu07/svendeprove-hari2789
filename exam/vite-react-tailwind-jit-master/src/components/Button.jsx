import React from 'react'

const Button = ( { text , styles}) => {
  return (
    <button type="button" className={` bg-primary py-4 px-6 bg-purple-gradient font-Roboto fonrt-medium text-[18px] text-secondary outline-none ${styles}`}> 
          { text }
    </button>
  )
}

export default Button