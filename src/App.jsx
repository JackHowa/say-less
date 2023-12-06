import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} >
      <p style={{ maxHeight: isOpen ? 'none' : '100px', overflow: 'hidden' }}>I threw a wish in the well
        I threw a wish in the well
        Don't ask me, I'll never tell
        I looked to you as it fell
        And now you're in my way
        I trade my soul for a wish
        Pennies and dimes for a kiss
        I wasn't looking for this
        But now you're in my way
        Your stare was holdin'
        Ripped jeans, skin was showin'
        Hot night, wind was blowin'
        Where you think you're going, baby?
        Hey, I just met you, and this is crazy
        But here's my number, so call me, maybe
        It's hard to look right at you, baby
        But here's my number, so call me, maybe
        Hey, I just met you, and this is crazy
        But here's my number, so call me, maybe
        And all the other boys try to chase me
        But here's my number, so call me, maybe
        You took your time with the call
        I took no time with the fall
        You gave me nothing at all
        But still, you're in my way
        I beg and borrow and steal
        At first sight, and it's real
        I didn't know I would feel it
        But it's in my way
        Your stare was holdin'
        Ripped jeans, skin was showin'
        Hot night, wind was blowin'
        Where you think you're going, baby?
        Hey, I just met you, and this is crazy
        But here's my number, so call me, maybe
        It's hard to look right at you, baby
        But here's my number, so call me, maybe
        Hey, I just met you, and this is crazy
        But here's my number, so call me, maybe
        And all the other boys try to chase me
        But here's my number, so call me, maybe
        Before you came into my life, I missed you so bad
        I missed you so bad, I missed you so, so bad
        Before you came into my life, I missed you so bad
        And you should know that
        I missed you so, so bad
        (Bad, bad, bad, bad, bad, bad)
        It's hard to look right at you, baby
        But here's my number, so call me, maybe
        Hey, I just met you, and this is crazy
        But here's my number, so call me, maybe
        And all the other boys try to chase me
        But here's my number, so call me, maybe
        Before you came into my life, I missed you so bad
        I missed you so bad, I missed you so, so bad
        Before you came into my life, I missed you so bad
        And you should know that
        So call me maybe
      </p>
      <button onClick={() => {
        setIsOpen(prevState => !prevState)
        const scrollHeight = containerRef.current.scrollHeight;
        // not supposed to use ref within the render
        // will do in a future assignment
        console.log(scrollHeight, 'scroll height')
      }}>{isOpen ? 'Say Less' : 'Say More'}</button>
    </div>
  )
}

export default App
