import "./App.sass";
import React, { useEffect, useState } from "react";

const App = () => {
  const url = 'https://api.github.com/search/repositories?q=readme:pomodoro=stars&order=desc&per_page=10';

  fetch(url)
    .then(response => response.json())
    .then(repos => {
      console.log(repos);
    });
  return <div className="App">here will be content</div>;
}

export default App;
