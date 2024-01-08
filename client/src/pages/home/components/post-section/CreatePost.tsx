import { CreatePostButton } from "../../../../ui/Button";
import { CreatePostInput } from "../../../../ui/Input";
import { Select } from "../../../../ui/Select";
import { CreatePostWrapper } from "../../style/Post-styles";
import axios from "axios";

function CreatePost() {
  return (
    //post request sa username (koji prima _id),
    //kategorija se uzima dinamicki kao i kontent

    <CreatePostWrapper>
      <CreatePostInput type="text" placeholder="Write your post here:" />
      <Select>
        <option value="">Select category:</option>
        <option value="general">General</option>
        <option value="linux">Linux</option>
        <option value="tools">Tools</option>
        <option value="pen-testing">Pen Testing</option>
        <option value="networking">Networking</option>
        <option value="certification">Certification</option>
        <option value="mobile">Mobile Hacking</option>
        <option value="study">Studying Material</option>
      </Select>
      <CreatePostButton variant="primary">POST</CreatePostButton>
    </CreatePostWrapper>
  );
}

export default CreatePost;
