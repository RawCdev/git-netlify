import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandonElemArray'

function App() {
  
console.log(phrases)

const phraseRandom = getRandomElemArray(phrases)
const numberRandom = getRandomElemArray([1, 2, 3, 4])

const [quote, setQuote] = useState(phraseRandom)
const [numberBg, setnumberBg] = useState(numberRandom)

console.log(quote)

const bgStyle = {
  backgroundImage: `url(/fondo${numberBg}.jpg)`
}

  return (
    <div style={bgStyle}>
      <h1>Galleta de la fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote 
      setQuote= {setQuote}
      phrases = {phrases}
      setnumberBg={setnumberBg}
      />
    </div>
  )
}

export default App
