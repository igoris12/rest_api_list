import "./App.sass";
import React, { useEffect, useState } from "react";

const App = () => {
  const url = 'https://api.github.com/search/repositories?q=Pomodoro&type=repositories&s=stars&o=desc';

  fetch(url)
    .then(response => response.json())
    .then(repos => {
      console.log(repos);
      repos.items.map(repo => console.log(repo.name))
    });
  return <div className="App">here will be content</div>;
}

export default App;
