import { CreatePostButton } from "../../../../ui/Button";
import { CreatePostInput } from "../../../../ui/Input";
import { Select } from "../../../../ui/Select";
import { CreatePostWrapper } from "../../style/Post-styles";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";

// const capitalize = function (sentence) {
//   let str = sentence.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substring(1);
//   }
//   return str.join(" ");
// };

function CreatePost({ setReload }) {
  const [postContent, setPostContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { token, userDetails } = useContext(UserContext);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPostContent(e.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:5000/api/v1/posts/",
        {
          username: userDetails._id,
          category: selectedCategory,
          content: postContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReload(true);

      document.getElementById("categorySelect")?.setAttribute("value", "");
      document.getElementById("contentTextarea")?.setAttribute("value", "");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setReload(false);

        console.log(err.response?.data);
      } else {
        console.log(err);
        setReload(false);
      }
    }
  };

  return (
    //post request sa username (koji prima _id),
    //kategorija se uzima dinamicki kao i kontent

    <CreatePostWrapper>
      <CreatePostInput
        id="contentTextarea"
        value={postContent}
        onChange={handleContentChange}
        type="text"
        placeholder="Write your post here:"
      />
      <Select
        id="categorySelect"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select category:</option>
        <option value="General">General</option>
        <option value="Linux">Linux</option>
        <option value="Tools">Tools</option>
        <option value="Pen Testing">Pen Testing</option>
        <option value="Networking">Networking</option>
        <option value="Certification">Certification</option>
        <option value="Mobile Hacking">Mobile Hacking</option>
        <option value="Studying Material">Studying Material</option>
      </Select>
      <CreatePostButton onClick={handleCreatePost} variant="primary">
        POST
      </CreatePostButton>
    </CreatePostWrapper>
  );
}

export default CreatePost;
