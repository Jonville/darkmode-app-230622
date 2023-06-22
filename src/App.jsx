import { useState , useContext } from 'react'
import './App.css'
import Page from './components/Page'
import { Context } from './Context';

function App() {
  const [darkmode , setDarkmode] = useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  }

  return (
    // Context로 하위 컴포넌트에게 state 값을 제공
    <Context.Provider value={{darkmode, handleDarkmode}}>
      <Page />
    </Context.Provider>
  )
}

export default App
