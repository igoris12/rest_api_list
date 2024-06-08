import "./App.sass";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: secret ,
});

try {
  const result = await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'igoris12',
  repo: 'portfolio_website',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
  });

  // result.data.map((issue) => {
  //   console.log(issue.title, issue.user.id);
  // });

  
    console.log(result.data);

  
  
} catch (error) {
  console.log(
    `Error! Status: ${error.status}. Message: ${error.response.data.message}`
  );
}
function App() {
  return <div className="App">here will be content</div>;
}

export default App;
