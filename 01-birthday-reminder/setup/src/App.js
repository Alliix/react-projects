import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3 data-testid="heading">{people.length} birthdays today</h3>
        <List people={people} />
        <button data-testid="button" onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
