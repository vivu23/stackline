import * as React from 'react'
import stackline from '../../resources/stackline_logo.svg';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <img src={stackline} alt="Logo" />
    </div>
  )
}

export default Header;