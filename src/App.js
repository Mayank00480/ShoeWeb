import React from 'react'
import ShoeForm from './components/ShoeForm/ShoeForm'
import ContextProvider from './components/Store/ContextProvider'
import ItemList from './components/ItemList/ItemList'
import Popup from './components/popup/Popup'
const App = () => {
  return (
    <ContextProvider>
     <ShoeForm />
     <ItemList />
     <Popup />
    </ContextProvider>
  )
}

export default App
