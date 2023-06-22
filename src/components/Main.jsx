import React, { useContext } from 'react'
import { Context } from '../Context';

function Main() {
  const {darkmode} = useContext(Context)
  // console.log('Main 에서 받는 props : ', props);

  return (
    <section className={darkmode ? 'bg-dark text-white' : null}>
      <h1>main</h1>
    </section>
    )
}

export default Main