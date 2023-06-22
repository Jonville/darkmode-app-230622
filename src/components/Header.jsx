import React, { useContext } from 'react'
import { Context } from '../Context';


function Header() {
  const {darkmode , handleDarkmode} = useContext(Context)
  // console.log('Header 에서 받는 props : ',props)

  return (
      <header>
        <h1>Header</h1>
        <button className='btn btn-light' onClick={handleDarkmode}>
          {!darkmode ? 'darkmode' : 'lightmode'}
        </button>
      </header>
    )
}

export default Header