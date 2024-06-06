import "./App.sass";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
  });

  result.data.map((issue) => {
    console.log(issue.title, issue.user.id);
  });
  // const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  // console.log(titleAndAuthor)
} catch (error) {
  console.log(
    `Error! Status: ${error.status}. Message: ${error.response.data.message}`
  );
}
function App() {
  return <div className="App">here will be content</div>;
}

export default App;
