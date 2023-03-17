import React from 'react';
import styled from "styled-components";

function Hello(props){
    console.log(props)
    return (<div style={{color : props.color}}>
        안녕하세요 {props.name}님!
    </div>);
}

export default Hello;
