import React, { useState } from "react";

function Counter(){
    const [num, setNum] = useState(0)
    const onIncrease = () =>{
        //console.log('+1');
        setNum(preNum => preNum + 1)
        //함수형 렌더링 : 동기/비동기 테스트
        //setNum(preNum => preNum + 1)
        //setNum(num + 1)
    }
    const onDecrease = () =>{
        //console.log('-1');
        //setNum(num - 1)
        setNum(preNum => preNum - 1)
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;