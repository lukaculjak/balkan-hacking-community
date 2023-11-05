import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { PostsLayout } from "../../style/Post-styles";
import CreatePost from "./CreatePost";

const BASE_URL = "http://localhost:8000";

function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(function () {
    async function fetchPosts() {
      try {
        // TODO: set loading indicator to true;
        const res = await fetch(`${BASE_URL}/posts`);
        const data = await res.json();
        setAllPosts(data);
      } catch (error) {
        alert("Error loading posts from server");
      } finally {
        // TODO: set loading indicator to false;
        console.log("finally");
      }
    }
    fetchPosts();
  }, []);

  return (
    <PostsLayout>
      <CreatePost />
      <ul>
        {allPosts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </PostsLayout>
  );
}

export default Posts;
