import React from "react";
import addIcon from "../assets/add.svg";
import backlogIcon from "../assets/Backlog.svg";
import cancelledIcon from "../assets/Cancelled.svg";
import displayIcon from "../assets/Display.svg";
import doneIcon from "../assets/Done.svg";
import dotMenuIcon from "../assets/dotMenu.svg";
import downArrowIcon from "../assets/down.svg";
import highPriorityIcon from "../assets/highPriority.svg";
import inProgressIcon from "../assets/inProgress.svg";
import lowPriorityIcon from "../assets/lowPriority.svg";
import mediumPriorityIcon from "../assets/mediumPriority.svg";
import noPriorityIcon from "../assets/noPriority.svg";
import urgentPriorityIcon from "../assets/urgentPriority.svg";
import todoPriorityIcon from "../assets/todo.svg";


import "../App.css"; 

const TitleCard = ({ title, count }) => {
const icons = {
    "Backlogs": backlogIcon,
    "Cancelled": cancelledIcon,
    "Display": displayIcon,
    "Done": doneIcon,
    "In Progress": inProgressIcon,
    "High": highPriorityIcon,
    "Low": lowPriorityIcon,
    "Medium": mediumPriorityIcon,
    "No Priority": noPriorityIcon,
    "Urgent": urgentPriorityIcon,
    "Todo": todoPriorityIcon,
    "User 1" : todoPriorityIcon,
    "User 2" : todoPriorityIcon,
    "User 3" : todoPriorityIcon,
    "User 4" : todoPriorityIcon,
    "User 5" : todoPriorityIcon,
};

return (
    <div className="title-card">
        <div className="title-card-header">
            <img src={icons[title]} alt={title} className="title-card-icon" />
            <span className="title-card-title">{title}</span>
            <span className="title-card-count">{count}</span>
            <img src={addIcon} alt="Add" className="title-card-add-icon" />
            <img src={dotMenuIcon} alt="Options" className="title-card-dot-menu-icon" />
        </div>
    </div>
);
};

export default TitleCard;
