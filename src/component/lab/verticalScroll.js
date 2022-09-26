import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Picture from "./gallery";

export function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

function App() {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="App" ref={scrollRef} style={{ overflow: "auto" }}>
      <div style={{ whiteSpace: "nowrap" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Picture />
      </div>
    </div>
  );
}
export default App;
