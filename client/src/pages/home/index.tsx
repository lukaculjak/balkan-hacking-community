import { useState } from "react";
import Filter from "./components/filter-section/Filter";
import Posts from "./components/post-section/Posts";
import Profile from "./components/profile-section/Profile";
import StyledHomepage from "./style";

function Home() {
  const [reload, setReload] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <StyledHomepage>
      <Profile />
      <Posts reload={reload} setReload={setReload} filter={filter} />
      <Filter setFilter={setFilter} />
    </StyledHomepage>
  );
}

export default Home;
