import React, { useState } from 'react'

export default function TextForm(props) {
  
  const [text, setText] = useState("")
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success")
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared!","success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const showWords = (text) => {
    return text.split(/\s+/).filter(text => text !== '').length;
  }

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h3 className='mb-3'>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick} > Convert Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick} > Convert Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick} > Clear </button>
    </div>
    <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
      <h3> Your Text Summary </h3>
      <p> {showWords(text)} words and {text.length} character </p>
      <p> {0.008 * showWords(text)} Minutes read </p>
    </div>
    </>
  )
}
