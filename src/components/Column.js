import React from "react";
import Card from "./Card";
import TitleCard from "./TitleCard";


const Column = ({ title, cards }) => {
  return (
    <div className="columnStyle">
      <TitleCard title={title} count={cards.length} />
      {cards.map((card, index) => (
        <Card key={index} content={card} />
      ))}
    </div>
  );
};

export default Column;
