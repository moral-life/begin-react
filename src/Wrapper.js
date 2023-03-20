import React from "react";

function Wrapper(props){
    const style ={
        border: '2px solid blue',
        padding: '10px',
        margin: '10px',
    };
    return(
        <div style={style}>
            {props.children}
        </div>
    )
}
export default Wrapper