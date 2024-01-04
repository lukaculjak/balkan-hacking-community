import { PostItemWrapper, UserDetailsWrapper } from "../../style/Post-styles";
import Paragraph from "../../../../ui/Paragraph";

import defaultImg from "../../../../assets/default-user-pic.svg";

import PostParagraph from "../../../../ui/PostParagraph";
import { CategoryWrapper } from "../../style/Post-styles";
import { PostInfoWrapper } from "../../style/Post-styles";

interface PROPS {
  post: object;
  username: string;
  LastName: string;
  Date: string;
  Category: string;
  PostData: string;
}

const PostItem: React.FC<PROPS> = ({ post }) => {
  return (
    <li>
      <PostItemWrapper>
        <UserDetailsWrapper>
          <div>
            <img src={defaultImg} alt="default-user-image" />
          </div>
          <div>
            <Paragraph variant="text">{post.username}</Paragraph>
            <Paragraph variant="text">{post.LastName}</Paragraph>
            <Paragraph variant="date">{post.Date}</Paragraph>
          </div>
        </UserDetailsWrapper>

        <PostInfoWrapper>
          <CategoryWrapper>{post.Category}</CategoryWrapper>
          <PostParagraph>{post.PostData}</PostParagraph>
        </PostInfoWrapper>
      </PostItemWrapper>
    </li>
  );
};

export default PostItem;
