import React from 'react'
import './Loader.css'

export default function Loader(props) {
  return (
    <>
    {/* LOADER WITH DOTS  */}
        {props.type==="dots" ? 
    <div className="spinner">
        <div className="dot"></div>
    </div>
        :""
        }

    {/* LOADER WITH TEXT  */}
        {props.type==="text"? 
        <div className="classic">{props.text}</div> 
        :""
        }

    </>
  )
}
