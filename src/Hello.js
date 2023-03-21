import React from 'react';
import styled from "styled-components";

function Hello({name, color, isSpecial}){
    //console.log(props)
    return (<div style={{color: color}}>
        { isSpecial && <b>[중요]</b> }
        안녕하세요 {name}님!
    </div>);
}
Hello.defaultProps = {
    name: '이름없음',
    color: "grey"
}

export default Hello;
