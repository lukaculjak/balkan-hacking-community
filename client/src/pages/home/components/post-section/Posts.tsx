import PostItem from "./PostItem";
import { useContext, useEffect, useState } from "react";
import { PostsLayout } from "../../style/Post-styles";
import CreatePost from "./CreatePost";
import { UserContext } from "./../../../../contexts/UserContext";
// import axios from "axios";

// const BASE_URL = "http://localhost:8000";

function Posts({ reload, setReload, filter }) {
  const [allPosts, setAllPosts] = useState([]);
  const { token } = useContext(UserContext);

  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  useEffect(
    function () {
      async function fetchPosts() {
        try {
          // TODO: set loading indicator to true;
          const res = await fetch(`http://127.0.0.1:5000/api/v1/posts/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          setAllPosts(data.data.data);
          setReload(false);
        } catch (error) {
          alert("Error loading posts from server");
        } finally {
          // TODO: set loading indicator to false;
          console.log("finally");
        }
      }
      fetchPosts();
    },
    [reload, filter]
  );

  return (
    <PostsLayout>
      <CreatePost setReload={setReload} />
      <ul>
        {allPosts
          .filter((post) => (filter ? post.category === filter : true))
          .map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
      </ul>
    </PostsLayout>
  );
}

export default Posts;
