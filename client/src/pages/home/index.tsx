import Filter from "./components/filter-section/Filter";
import Posts from "./components/post-section/Posts";
import Profile from "./components/profile-section/Profile";
import StyledHomepage from "./style";

function Home() {
  return (
    <StyledHomepage>
      <Profile />
      <Posts />
      <Filter />
    </StyledHomepage>
  );
}

export default Home;
