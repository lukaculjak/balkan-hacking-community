import { useState } from "react";
import Filter from "./components/filter-section/Filter";
import Posts from "./components/post-section/Posts";
import Profile from "./components/profile-section/Profile";
import StyledHomepage from "./style";

function Home() {
  const [reload, setReload] = useState(false);
  return (
    <StyledHomepage>
      <Profile />
      <Posts reload={reload} setReload={setReload} />
      <Filter />
    </StyledHomepage>
  );
}

export default Home;
