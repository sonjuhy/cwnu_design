import React, { useCallback, useEffect } from "react";
import "../css/designerTab.css";
import Person from "./designerComponent";

import {AutoSizer, List, CellMeasurer, CellMeasurerCache} from "react-virtualized";

function App(props) {
    const cache = React.useRef(
        new CellMeasurerCache({
          fixedWidth: true,
          defaultHeight: 100,
        })
      );
    const [people, setPeople] = React.useState([]);
    useEffect(() => {
        setPeople(
            props.list.map((item, index) => {
                return {
                    id: item,
                    name: item,
                }
            })
        //   [...Array(1000).keys()].map((key) => {
        //     return {
        //       id: key,
        //       name: `${props.list} `,
        //     };
        //   })
        );
      }, []);
    useEffect(() => {
        console.log("personRender Effecter : " + props.selected);    
        console.log("personRender Effecter : " + props.list);    
    });
    const personRender = () => {
        console.log("personRender : " + props.selected); 
        const listTmp = props.list.map((item, index) => (
        <div key={item}>
          <Person krName={item} engName={item} />
        </div>
      ));
    return listTmp;
    };
//   const personRender = useCallback(
//     ({selected}) => {
//     console.log("personRender : " + selected);
//     console.log("personRender : " + props.selected);
    
//     const listTmp = props.list.map((item, index) => (
//         <div key={item}>
//           <Person krName={item} engName={item} />
//         </div>
//       ));
//     return listTmp;
//   },[props.selected]);

  return (
    <div className="designer-main-div">
      <div>
        <AutoSizer>
          {({ height, width }) => (
            <List
            height={height}
            width={width}
            rowCount={props.listlen}
            rowHeight={10}
            rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];

                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <h2>{person.name}</h2>
                    </div>
                  </CellMeasurer>
                );
              }}
            // rowRenderer={personRender}
            list={props.list}
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
