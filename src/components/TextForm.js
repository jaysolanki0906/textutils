import React, { useState } from 'react';

export default function TextForm(props) {
    const handleClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper case!","success");
    };

    const handleClickLower = () => {
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to Lower case!","success");

    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const copy_content=()=>
    {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Cpoied to Clipbord","success");

    }
    const extra_space=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed","success");

    }
    const clear=()=>
    {
        let newText="";
        setText(newText)
        props.showAlert("All Text is cleared","success");

    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container my5" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                    style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClickLower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={copy_content}>Copy content</button>
            <button className="btn btn-primary mx-2" onClick={extra_space}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
        </div>
        <div className="container my5" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length==0?0:text.split(" ").length} words {text.length} characters</p>
            
            <p>{text.split(" ").length*0.008} minuts to read paragraph</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter somethinng to perview it.'}</p>
        </div>
        </>
    );
}
