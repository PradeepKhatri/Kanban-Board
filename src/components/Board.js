import React, { useEffect, useState } from "react";
import Column from "./Column";
import "../App.css";
import displayIcon from "../assets/Display.svg";


const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("Status");
  const [groupedColumns, setGroupedColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const users = [
      {
        id: 1,
        title: "User 1",
        cards: tickets.filter(ticket => ticket.userId === "usr-1"),
      },
      {
        id: 2,
        title: "User 2",
        cards: tickets.filter(ticket => ticket.userId === "usr-2"),
      },
      {
        id: 3,
        title: "User 3",
        cards: tickets.filter(ticket => ticket.userId === "usr-3"),
      },
      {
        id: 4,
        title: "User 4",
        cards: tickets.filter(ticket => ticket.userId === "usr-4"),
      },
      {
        id: 5,
        title: "User 5",
        cards: tickets.filter(ticket => ticket.userId === "usr-5"),
      },
    ];

    const userColumns = users.map(user => ({
      title: user.title,
      cards: user.cards,
    }));

    const columns = [
      {
        id: "backlogs",
        title: "Backlogs",
        cards: tickets.filter(ticket => ticket.status === "Backlog"),
      },
      {
        id: "todo",
        title: "Todo",
        cards: tickets.filter(ticket => ticket.status === "Todo"),
      },
      {
        id: "in-progress",
        title: "In Progress",
        cards: tickets.filter(ticket => ticket.status === "In progress"),
      },
      {
        id: "done",
        title: "Done",
        cards: tickets.filter(ticket => ticket.status === "Done"),
      },
      {
        id: "cancelled",
        title: "Cancelled",
        cards: tickets.filter(ticket => ticket.status === "Cancelled"),
      },
    ];

    const newGroupedColumns =
      groupBy === "Status"
        ? columns
        : groupBy === "Priority"
        ? [
            {
              id: "no-priority",
              title: "No Priority",
              cards: tickets.filter(ticket => ticket.priority === 0),
            },
            {
              id: "urgent-priority",
              title: "Urgent",
              cards: tickets.filter(ticket => ticket.priority === 4),
            },
            {
              id: "high-priority",
              title: "High",
              cards: tickets.filter(ticket => ticket.priority === 3),
            },
            {
              id: "medium-priority",
              title: "Medium",
              cards: tickets.filter(ticket => ticket.priority === 2),
            },
            {
              id: "low-priority",
              title: "Low",
              cards: tickets.filter(ticket => ticket.priority === 1),
            },
          ]
        : userColumns;

    setGroupedColumns(newGroupedColumns);
  }, [tickets, groupBy]);

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    let sortedColumns = [...groupedColumns];

    sortedColumns = sortedColumns.map(column => {
      let sortedCards = [...column.cards];
      if (sortBy === "Priority") {
        sortedCards.sort((a, b) => b.priority - a.priority);
      } else if (sortBy === "Title") {
        sortedCards.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
      }
      return { ...column, cards: sortedCards };
    });

    setGroupedColumns(sortedColumns);
  };

  const groupOptions = ["Status", "Priority", "User"];
  const sortOptions = ["Priority", "Title"];

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", padding: "10px", gap: "20px" }} className="div-select">
  <label htmlFor="groupBy" className="dropdown-label">Display:</label>
  <select id="groupBy" value={groupBy} onChange={handleGroupByChange} className="dropdown">
    {groupOptions.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
  <label htmlFor="sortBy" className="dropdown-label">Sort By:</label>
  <select id="sortBy" onChange={handleSortChange} className="dropdown">
    {sortOptions.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
</div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          height: "100vh",
          width: "100vw",
        }}
      >
        {groupedColumns.map((column) => (
          <Column key={column.id} title={column.title} cards={column.cards} />
        ))}
      </div>
    </>
  );
};

export default Board;
