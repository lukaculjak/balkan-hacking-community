import styled from "styled-components";

export const PostInfoWrapper = styled.div`
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-40);
  padding: 15px;
`;

export const PostsLayout = styled.div`
  flex: 0 0 100rem;
  height: 100vh;
  padding: 10px 10px;
  // bio je color grey 50
  background-color: var(--color-grey-70);
  box-shadow: var(--shadow-sm);
`;

export const CategoryWrapper = styled.div`
  display: inline-block;
  padding: 7px 15px;
  background-color: var(--color-brand-60);
  color: var(--color-grey-10);
  font-size: 1.8rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;

export const PostItemWrapper = styled.div`
  width: 100%;
  background-color: var(--color-grey-30);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-brand-60);
  padding: 10px;
  margin-bottom: 10px;
`;

export const UserDetailsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 3px;
`;

////////////////////////////////////////////////////////////////
//CREATE A POST

export const CreatePostWrapper = styled.div`
  background-color: var(--color-grey-70);
  border-radius: var(--border-radius-sm);
  margin-bottom: 10px;
  display: flex;
  padding: 10px;
  border: 1px solid var(--color-brand-60);
`;
