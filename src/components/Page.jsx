import React, { useContext } from 'react'
import Header from './Header'
import Main from './Main'
import { Context } from '../Context.jsx';


function Page() {
  // const {darkmode , handleDarkmode} = props;
  // console.log('page 에서 받는 props : ',props);

  const {darkmode , handleDarkmode} = useContext(Context)

  return (
    <div className={darkmode ? 'darkmode' : null}>
      <Header />
      <Main />
    </div>
  )
}

export default Page