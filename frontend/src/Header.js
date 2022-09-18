import * as React from "react";
import { Avatar } from "react-lorem-ipsum";
import NewPost from './NewPost'
import { useState } from "react";


export const Header = () => {
  const [showComponent, setShowComponent] = useState(false);
  return (
  <header>
    <span className="date">Tuesday, August 13th</span>
    <h1>Today</h1>
    <div className="avatar">
{/* <Avatar/> */}
      {/* <img src="images/plus.jpeg" onClick={()=>
      {
        setShowComponent(!showComponent);            
      } }/> */}
      {/* {showComponent ? <NewPost /> : ""} */}
    </div>
  </header>
)};
