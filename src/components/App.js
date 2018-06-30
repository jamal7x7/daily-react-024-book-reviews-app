import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Flashcards App</h1>
  </header>
)

const Items = () => (
  <div className=' flash-cards '>
    <div className='svg-input-wrap'>

        Items

      </div>
  </div>
)

const Menu = () => (
  <div className='study-plan'>
    <div className='svg-input-wrap'>

      Menu

    </div>
  </div>
)

class StickersStoreApp extends Component {
  render () {
    return (
      <div className='flash-cards-con'>

        <Menu />
        <Items />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <StickersStoreApp />

  </div>
)

export default App
