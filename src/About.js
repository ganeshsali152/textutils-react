import React from 'react'

export default function (props) {

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
        About
      </div>
    </>
  );
}
