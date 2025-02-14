import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={error ? "error" : null}
          ></input>
          <button className="btn" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, i) => {
          return (
            <SingleColor key={i} {...color} index={i} hexColor={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
