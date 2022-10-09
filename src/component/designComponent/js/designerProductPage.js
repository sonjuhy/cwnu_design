import React, { useState, useEffect, useRef, useSelector, useCallback } from "react";
import "../css/designerListPage.css";
import Person from "../../mainComponent/js/designerComponent";
import axios from "axios";
import { Link } from "react-router-dom";
import {BASE_URL} from '../../../api/URL'

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

  const [list, setList] = useState([]);
  useEffect(() => {
    settingData();
  }, []);
  const settingData = async () => {
    const { data } = await axios({
      method: "get",
      url: `${BASE_URL}/productList`,
    });

    setList(data);
  };

  const scrollRef = useHorizontalScroll();
  const verticalScrollRef = useRef();

  const setPersonList = (e) => {
    const listTmp = list.map((item) => (
      <div id="designer-sub-person-component" key={item.id}>
        <Link to='/design_personal' state={{
          engName: item.engName,
          partName: 'product/product',
          studyNum: item.num
        }}>
          <Person krName={item.krName} engName={item.engName}  studyNum={item.num}/>
        </Link>
      </div>
    ));
    return <div id="designer-sub-component">{listTmp}</div>;
  };

  const buttonClick = () => {
    verticalScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' ,inline: 'start' });
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
