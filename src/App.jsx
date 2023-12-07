import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const onClickFunction = () => {
    // toggle previous state rather than reading directly
    setIsOpen((prevState) => !prevState);

    const { scrollHeight } = contentRef.current;
    // setting state for the ref because ref shouldn&apos;t be used in render
    // You shouldn’t read (or write) the current value of use ref during rendering.
    // via https://react.dev/learn/referencing-values-with-refs#differences-between-refs-and-state
    setContentHeight(scrollHeight);
  };

  return (
    <div>
      <p
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentHeight : "100px",
          overflow: "hidden",
          transition: "all 0.5s ease",
        }}
      >
        I threw a wish in the well I threw a wish in the well Don't ask me, I'll
        never tell I looked to you as it fell And now you're in my way I trade
        my soul for a wish Pennies and dimes for a kiss I wasn't looking for
        this But now you're in my way Your stare was holdin' Ripped jeans, skin
        was showin' Hot night, wind was blowin' Where you think you're going,
        baby? Hey, I just met you, and this is crazy But here's my number, so
        call me, maybe It's hard to look right at you, baby But here's my
        number, so call me, maybe Hey, I just met you, and this is crazy But
        here's my number, so call me, maybe And all the other boys try to chase
        me But here's my number, so call me, maybe You took your time with the
        call I took no time with the fall You gave me nothing at all But still,
        you're in my way I beg and borrow and steal At first sight, and it's
        real I didn't know I would feel it But it's in my way Your stare was
        holdin' Ripped jeans, skin was showin' Hot night, wind was blowin' Where
        you think you're going, baby? Hey, I just met you, and this is crazy But
        here's my number, so call me, maybe It's hard to look right at you, baby
        But here's my number, so call me, maybe Hey, I just met you, and this is
        crazy But here's my number, so call me, maybe And all the other boys try
        to chase me But here's my number, so call me, maybe Before you came into
        my life, I missed you so bad I missed you so bad, I missed you so, so
        bad Before you came into my life, I missed you so bad And you should
        know that I missed you so, so bad (Bad, bad, bad, bad, bad, bad) It's
        hard to look right at you, baby But here's my number, so call me, maybe
        Hey, I just met you, and this is crazy But here's my number, so call me,
        maybe And all the other boys try to chase me But here's my number, so
        call me, maybe Before you came into my life, I missed you so bad I
        missed you so bad, I missed you so, so bad Before you came into my life,
        I missed you so bad And you should know that So call me maybe
      </p>
      <button onClick={onClickFunction}>
        {isOpen ? "Say Less" : "Say More"}
      </button>
    </div>
  );
}

export default App;
