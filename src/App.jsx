import { useState } from 'react'
import './App.css'
import WordShuffle from './components/WordShuffle'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='holder'>
        <WordShuffle>Himanshu</WordShuffle>
      </div>
    </>
  )
}

