import axios from "axios";

export const gitHubUserApi = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 2500,
//   headers: { "X-GitHub-Api-Version": "2022-11-28", },
});

// export const issueGitHub = axios.create({
//     baseURL: "https://api.github.com/search/",
//     timeout: 2500,
// })
