import "./App.sass";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const url =
    "https://api.github.com/search/repositories?q=stars:>=1&sort=stars&order=desc";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData([...data.items.slice(0, 10)]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data);
  const nameList = data.map((project) => (
    <li key={project.id}>
      {project.name} {" "} <span>{project.stargazers_count}</span>
    </li>
  ));
  return (
    <div className="App">
      <h1>Content</h1>
      <ul>{nameList}</ul>
    </div>
  );
};

export default App;
