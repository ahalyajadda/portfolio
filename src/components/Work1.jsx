import React from 'react'
import "./Work.css";
import Workcarddata from "./Workcarddata";
import Work from "./Work";
function Work1() {
  return (
    <div className='work-container'>
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       {Workcarddata.map((val,ind)=>{
        return (
            <Work  key={ind} imgsrc={val.imgsrc} text={val.text} title={val.title} view={val.view}  />
        )
       })}
      </div>
    </div>
  )
}

export default Work1
