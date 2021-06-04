import axios from "axios"
import React ,{useState, useEffect, useDebugValue}from "react"
import PhotoCard from "./PhotoCard"


const NasaPhoto =()=>{
    const [photo,setPhoto] = useState([])

    useEffect(()=>{
axios
.get("https://api.nasa.gov/planetary/apod?api_key=SamhA40YU4ZoX0pxcnbM2VkV5vChDdtwHUnjhKfK")
.then(res => {
    console.log(res.data)

setPhoto(res.data)
})



    },[])
    return (
        <div>

<PhotoCard copyright={photo.copyright} date={photo.date} expl ={photo.explanation} title ={photo.title} url ={photo.hdurl}/>
        </div>
    )
}

export default NasaPhoto;