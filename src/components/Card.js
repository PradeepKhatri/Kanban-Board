import React from "react";
import "../App.css"; 
import todoPriorityIcon from "../assets/todo.svg";
import dotMenuIcon from "../assets/dotMenu.svg";



const Card = ({ content }) => {
  return (
    <div className="card">
      <p className="card-id">{content.id}</p>
      <h4 className="card-title">{content.title}</h4>
      <div className="lower" >
      <img src={dotMenuIcon} alt="Options" className="title-card-dot-menu-icon" style={{ marginRight: "10px" }} />
      <div className="tag-div">
        <img src={todoPriorityIcon} alt="Options" className="circle-icon" style={{ marginRight: "5px" }} />
        <p className="card-tag">{content.tag}</p>
      </div>
      </div>
      
    </div>
  );
};


export default Card;
