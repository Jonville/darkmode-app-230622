import React from 'react'
import Header from './Header'
import Main from './Main'

function Page(props) {
  const {darkmode , handleDarkmode} = props;
  console.log('page 에서 받는 props : ',props);

  return (
    <div className='page'>
      <Header
        darkmode={darkmode}
        handleDarkmode={handleDarkmode}
      />
      <Main
        darkmode={darkmode}
      />
    </div>
  )
}

export default Page