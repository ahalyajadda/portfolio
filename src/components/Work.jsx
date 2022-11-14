import React from 'react'
import "./Work.css";
import { Link } from 'react-router-dom';
function Work(props) {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                  {/* console.log({props.view}); */}
                    <a href={props.view} target="_blank" className="btn">view</a>
                </div>
            </div>

        </div>
  )
}

export default Work 
