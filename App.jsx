import { useState } from "react";
import "./App.css";
import TagInputComponent from "./TagInputComponent";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <>
      <TagInputComponent
        label="Categories"
        onChange={setSelectedCategories}
        value={selectedCategories}
      />
      <div>{selectedCategories.join(", ")}</div>{" "}
    </>
  );
}

export default App;
