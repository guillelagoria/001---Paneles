import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const imagenes = [
    "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ];

  const [active, setActive] = useState([false, false, false, false, false]);

  const changeArray = (index) => {
    const newArray = active.map((b, i) => {
      if (index === i) {
        return !b;
      } else {
        return false;
      }
    });
    console.log(newArray);
    setActive(newArray);
  };

  return (
    <>
      <h1>Slide Cards</h1>
      <div className="container">
        {active.map((act, i) => (
          <div
            key={i}
            className={active[i] ? "panel active" : "panel"}
            onClick={() => {
              const flag = i;
              changeArray(flag);
            }}
            style={{ backgroundImage: `url(${imagenes[i]})` }}
          >
            <h3>Picture {i + 1}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
