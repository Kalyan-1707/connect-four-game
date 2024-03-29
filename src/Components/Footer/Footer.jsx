import React from 'react'
//styles
import './Footer.css'

const Footer = ({bgColor, children}) => {
  return (
    <footer className='footer' style={{backgroundColor:bgColor}}>
        {children}
    </footer>
  )
}

export default Footer