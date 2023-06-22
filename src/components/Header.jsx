import React from 'react'

function Header(props) {
  const {darkmode , handleDarkmode} = props
  console.log('Header 에서 받는 props : ',props)

  return (
      <header >
        <h1>Header</h1>
        <button onClick={handleDarkmode}>
          {!darkmode ? 'darkmode' : 'lightmode'}
        </button>
      </header>
    )
}

export default Header