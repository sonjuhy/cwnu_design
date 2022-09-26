import React, { useState, useEffect, useRef, useSelector, useCallback } from "react";
import "../css/designerListPage.css";
import Person from "../../js/designerComponent";

import ScrollHorizontal from "react-scroll-horizontal";

const data = [
  "content100",
  "content200",
  "content300",
  "content400",
  "content500",
];

let list = [
  { name: "list1" },
  { name: "list2" },
  { name: "list3" },
  { name: "list4" },
  { name: "list5" },
]; // 임시데이터 선언

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

function App() {
  /**
   *
   * get data from db
   */

  const scrollRef = useHorizontalScroll();
  const verticalScrollRef = useRef();

  const [peopleList, setPeopleList] = useState([]);
  const [listLen, setListLen] = useState(0);
  const data = [
    "content100",
    "content200",
    "content300",
    "content400",
    "content500",
  ];

  const setPersonList = (e) => {
    const listTmp = data.map((item) => (
      <div id="designer-sub-person-component" key={item}>
        <Person krName={item} engName={item} />
      </div>
    ));
    return <div id="designer-sub-component">{listTmp}</div>;
  };

  const buttonClick = () => {
    verticalScrollRef.current.scrollIntoView({ behavior: 'smooth', Inline: 'start' });
  };

  return (
    <div className="designer-sub-div">
      <div
        className="designer-sub-list-div"
        ref={scrollRef}
        style={{ overflow: "auto" }}
      >
        <div ref={verticalScrollRef} style={{ whiteSpace: "nowrap" }}>
            {setPersonList()}</div>
      </div>
      <div>
        <img src="assets/img/button_scroll_white.png" onClick={buttonClick} id="designer-scrollDown-button"/>
      </div>
    </div>
  );
}

export default App;
