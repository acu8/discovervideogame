import ListGroup from "./components/ListGroup/ListGroup";
import { useState } from "react";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
