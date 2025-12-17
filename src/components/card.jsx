import React from 'react'
import {BookmarkPlus} from 'lucide-react'
const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src= {props.logo} alt=""/>
          <button clssName="save"> Save <BookmarkPlus /></button>
        </div>
        <div className='Center'>
          <h3>{props.company} <span> {props.date}</span></h3>
          <h2>{props.role}</h2>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
          <hr className="divider" />
        </div>
        <div className='bottom'>
          <div>
              <h3>{props.pay}</h3>
              <p> Mumbai,India</p>
          </div>
            <button>Appy Now</button>
        </div>
      </div>
  )
}

export default Card