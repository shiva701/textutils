import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted the text to UpperCase", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted the text to LowerCase", "success");
    }
    //arrow function
    const handleUpChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }
    //arrow function
    const handleRemoveSpaces = () => {
        // console.log("remove extra spaces" + text);
        let newText = text.split(/[ ]+/); //regex
        setText(newText.join(" "));
        props.showAlert("Removed spaces from the text", "success");
    }
    //arrow function
    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </>
    )
}
