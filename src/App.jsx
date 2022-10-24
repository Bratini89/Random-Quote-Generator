import { useState } from 'react';
import './App.css';
import quotes from './quotes.json';
import Icon from './Icon';
import Icon2 from './Icon2';







function App() { 

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [ index, setIndex ] = useState(randomIndex)
  
  const changeQuotes = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length)
    setIndex(anotherRandom)
  }
  const colors = [
    "#b1b1b1",
    "#ceb7ca", 
    "#fbb9c8", 
    "#ffc0ac", 
    "#ffd685", 
    "#f9f871",
    "#358da0",
    "#663d60",
    "#d16ba5",
    "#e37e69",
    "#ffb661",
    "#f9f871",
    "#7a6048",
    "#ffe3f0",
    "#f185df",
    "#debdc5",
    "#c777b9"
  ]
  const randomColorIndex = Math.floor(Math.random() * colors.length)
  document.body.style= `background: ${colors[randomColorIndex]}`

  return (
    <div className="App">
      
      <h2><Icon />{quotes[index].quote}<Icon2 /></h2>
        <p className='end'>_{quotes[index].author}</p>
      <div>
        <button className='btn' onClick={changeQuotes} 
        style={{ background: `${colors[randomColorIndex]}` }}>
          <i className='bx bx-right-arrow bx-md'></i>
          </button>
      </div>
    </div>
  )
}

export default App
