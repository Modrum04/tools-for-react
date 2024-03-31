import { useState } from "react";
import { userFiles } from "./data";
import "./App.css";
import Simpson from "./Simpson";
import { filteredArray } from "./tools/tools.js";

function App() {
  const [searchContent, setSearchContent] = useState("");
  const searchSomething = (e) => {
    setSearchContent(e.target.value);
  };

  return (
    <>
      <input
        type="search"
        placeholder="search users informations"
        onChange={searchSomething}
      ></input>
      {filteredArray(userFiles, searchContent).map((element) => {
        element = userFiles.find((originalUser) => originalUser.id === element.id);
        return <Simpson usersInformations={element} />;
      })}
    </>
  );
}

export default App;
