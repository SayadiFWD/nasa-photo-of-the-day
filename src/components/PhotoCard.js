import React from "react"

const PhotoCard =(props)=>{
    return(
        <div>
        <h3 className = "header">{props.title}</h3>
        <img  className ="img" src={props.url}/>
        <p>{props.expl}</p>
        <p>{props.date}</p>
        <p>copyright: {props.copyright}</p>
        </div>
    )
}

export default PhotoCard;