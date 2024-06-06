import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

  export type dataTypes = {
    name: string;
    login: string;
    created_at: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
    html_url: string;
    id: number;
    email: string;
    blog: string;
    location: string;
    twitter_username: string;
    company: string;
    following_url: string;
    followers_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    darkMode: boolean;
  };

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState<dataTypes | null>(null);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  async function fetchData() {
    const response = await fetch("https://api.github.com/users/octocat");
    const result = await response.json();
    setData(result);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen p-[24px]  bg-[#F6F8FF]">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} data={data} />
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} data={data} />
    </div>
  );
}

export default App;
