import React from 'react'
import "./Work.css";
function Work(props) {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} target="_blank" rel="noreferrer" className="btn">view</a>
                </div>
            </div>

        </div>
  )
}

export default Work 
