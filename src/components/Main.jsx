import React from 'react'

function Main(props) {
  const {darkmode} = props
  console.log('Main 에서 받는 props : ', props);

  return (
    <section className={darkmode ? 'darkmode' : null}>
      <h1>main</h1>
    </section>
    )
}

export default Main