import React, { useState } from "react";

function InputSample(){
    const [text, setText] = useState('');
    const [label, setLabel] = useState('');
    const onChange = (e)=>{
        setText(e.target.value);
    };
    const onReset = ()=>{
        setText('');
    };
    const labelChange = ()=>{
        setLabel(text)
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <button onClick={labelChange}>값 변경</button>
            <div>
                <b>값: {label}</b>
            </div>
        </div>
    );
}

export default InputSample