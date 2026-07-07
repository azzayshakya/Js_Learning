import React, { useState } from 'react';
import Child from './component/Child';

export default function Parent() {
  const [boxColor, setBoxColor] = useState('white');
  const [number, setNumber] = useState(0);
  const ChangeColorFuncion = (color) => {
    setBoxColor(color);
  };
  const ChangeNumber = (number) => {
    setNumber(number);
  };
  return (
    <div>
      <Child selectColor={ChangeColorFuncion} ChangeNumber={ChangeNumber} />
      <div>
        <span>Cuurent Number : </span> {number}
      </div>
      <div
        className="main_box"
        style={{
          background: '#ee7e7e',
          borderRadius: '0.5rem',
          paddingBottom: '1rem',
        }}>
        <h1 style={{ padding: ' 0px 1rem', borderRadius: '' }}>
          This is Callback testing :
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            justifyContent: 'center',
          }}>
          <div
            className="box"
            style={{
              border: '2px red solid',
              width: '100px',
              height: '100px',
              background: `${boxColor}`,
            }}></div>
          <div
            className="box"
            style={{
              border: '2px red solid',
              width: '100px',
              height: '100px',
              background: `${boxColor}`,
            }}></div>
        </div>
      </div>
    </div>
  );
}
