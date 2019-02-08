import React from 'react'
import { Root, Routes } from 'react-static'
import Header from './components/Header'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

import './index.css'

function App() {
  return (
    <Root>
      <div className="pageContainer">
        <Header />
        <main>
          <Routes />
        </main>
        <ContactUs />
        <Footer />
      </div>
    </Root>
  )
}

export default App
