import { useState, useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function SayLess({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  // used for syncing external state with internal
  useEffect(() => {
    // set initial content height on first render
    setContentHeight(contentRef.current.scrollHeight);
  }, []);

  const onClickFunction = () => {
    // toggle previous state rather than reading directly
    setIsOpen((prevState) => !prevState);
  };

  const isTallEnoughForSayMore = contentHeight > 100;

  console.log(isTallEnoughForSayMore, "is tall enough");

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
        {children}
      </p>

      <button onClick={onClickFunction}>
        {isOpen ? "Say Less" : "Say More"}
      </button>
    </div>
  );
}
