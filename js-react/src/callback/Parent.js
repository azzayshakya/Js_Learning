import React, { useState } from "react";
import Child from "./component/Child";

export default function Parent() {
  const [boxColor, setBoxColor] = useState("white");
  const [items, setItems] = useState([
    { id: 1, name: "AZ_1" },
    { id: 2, name: "AZ_2" },
    { id: 3, name: "AZ_3" },
  ]);
  const [number, setNumber] = useState(0);
  const [searchText, setSearchText] = useState("");

  const ChangeColorFuncion = (color) => setBoxColor(color);
  const ChangeNumber = (number) => setNumber(number);
  const AddObject = (object) => setItems((prev) => [...prev, object]);

  const filterItems = (text) => {
    setSearchText(text);
  };

  const filteredData = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div>
      <Child
        AddObject={AddObject}
        selectColor={ChangeColorFuncion}
        ChangeNumber={ChangeNumber}
        filterItems={filterItems}
      />

      {filteredData.map((item) => (
        <span
          key={item.id}
          style={{
            color: "green",
            margin: "1rem",
            background: "lightGreen",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          {item.id} {item.name}
        </span>
      ))}

      <div style={{ margin: "1rem" }}>
        <span>Current Number : </span> {number}
      </div>

      <div
        className="main_box"
        style={{
          background: "#ee7e7e",
          borderRadius: "0.5rem",
          paddingBottom: "1rem",
        }}
      >
        <h1 style={{ padding: "0px 1rem" }}>This is Callback testing :</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <div
            className="box"
            style={{
              border: "2px red solid",
              width: "100px",
              height: "100px",
              background: boxColor,
            }}
          ></div>
          <div
            className="box"
            style={{
              border: "2px red solid",
              width: "100px",
              height: "100px",
              background: boxColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
