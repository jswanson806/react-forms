import React from "react";
import './Box.css'

const Box = ({ backgroundColor, height, width, remove }) => {


    return (
        <div className="Box-container">
            <div className="Box" 
                style={{
                    backgroundColor:backgroundColor,
                    height:height,
                    width:width
                }}
            >
            </div>
            <button className="Box-btn" onClick={remove}>X</button>
        </div>
    )
}

export default Box;