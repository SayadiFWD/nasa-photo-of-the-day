
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from "styled-components";

const Data = styled.div`
border: 2px solid black;
margin: 50px;
`

const Title = styled.h1`
color:tomato;
`

const Paragraph = styled.p`


border-top: 2px dotted black;
padding-left: 100px;
padding-right: 100px;


`
const Image = styled.img`

border-radius: 10px;

`
function PhotoList() {
    const [data, setData] = useState({})
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=miI40eqMuxQHfzdZnREccFeTZflbRiOwARDCDhwI&date=2012-03-25')
        .then(response => setData(response.data))
    }, [])

    console.log(data)
    return (
        <Data className = 'wrapper'>
            <Title>{data.title}</Title>
            <h3>{data.date}</h3>
            <Image alt={data.title} src={data.url}/>
            <h3>{data.copyright}</h3>
            <Paragraph>{data.explanation}</Paragraph>
        </Data>
    )
}

export default PhotoList;