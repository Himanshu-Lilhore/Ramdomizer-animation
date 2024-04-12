import { useState } from 'react'
import './App.css'
import WordShuffle from './components/WordShuffle'

export default function App() {

  return (
    <>
      <div id='lineHolder'>
        <WordShuffle myColor={'orange'}>About</WordShuffle>
        <WordShuffle myColor={'lime'}>Projects</WordShuffle>
        <WordShuffle myColor={'#ff5252'}>Resume</WordShuffle>
        <WordShuffle myColor={'#e246e2'}>Socials</WordShuffle>
        <a id='author' href='https://github.com/Himanshu-Lilhore'># Himanshu Lilhore</a>
      </div>
    </>
  )
}

