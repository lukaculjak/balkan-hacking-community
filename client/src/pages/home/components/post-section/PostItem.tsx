import { PostItemWrapper, UserDetailsWrapper } from "../../style/Post-styles";
import Paragraph from "../../../../ui/Paragraph";

import defaultImg from "../../../../assets/default-user-pic.svg";

import PostParagraph from "../../../../ui/PostParagraph";
import { CategoryWrapper } from "../../style/Post-styles";
import { PostInfoWrapper } from "../../style/Post-styles";

interface Post {
  _id: string;
  username: {
    _id: string;
    username: string;
  };
  category: string;
  content: string;
  createdAt: string;
}

// Then, define the type for the PostItem component props
interface PostItemProps {
  post: Post;
  key: string; // key is a reserved prop and does not need to be declared in props
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  // console.log(post._id);
  return (
    <li>
      <PostItemWrapper>
        <UserDetailsWrapper>
          <div>
            <img src={defaultImg} alt="default-user-image" />
          </div>
          <div>
            <Paragraph variant="text">{post.username.username}</Paragraph>
            <Paragraph variant="date">{post.createdAt.split("T")[0]}</Paragraph>
          </div>
        </UserDetailsWrapper>

        <PostInfoWrapper>
          <CategoryWrapper>{post.category}</CategoryWrapper>
          <PostParagraph>{post.content}</PostParagraph>
        </PostInfoWrapper>
      </PostItemWrapper>
    </li>
  );
};

export default PostItem;
