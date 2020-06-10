import React from 'react'
import './css/App.css'

import Header from './components/Header/Header'
import Destaque from './components/Destaque/Destaque'
import LineSeparator from './components/LineSeparator/LineSeparator'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <Destaque />

      <LineSeparator />

      <Content />

      <Footer />
    </div>
  )
}

export default App
