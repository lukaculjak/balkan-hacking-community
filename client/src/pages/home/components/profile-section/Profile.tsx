import { UserContext } from "./../../../../contexts/UserContext";
import { useContext } from "react";

import {
  ProfileLayout,
  ProfileWrapper,
  ProfileSettings,
} from "../../style/Profile-styles";
import { ProfileControlButtons, ProfileButton } from "../../../../ui/Button";
import ProfilePicture from "../../../../assets/default-user-pic.svg";

function Profile() {
  const { userDetails } = useContext(UserContext);

  return (
    <ProfileLayout>
      <ProfileWrapper>
        <div>
          <div>
            <img src={ProfilePicture} alt="user profile picture" />
          </div>
          <p>{userDetails.username}</p>
        </div>
        <ProfileSettings>
          <ProfileControlButtons variant="primary">
            Log Out
          </ProfileControlButtons>
          <ProfileButton variant="primary">Account Settings</ProfileButton>
        </ProfileSettings>
      </ProfileWrapper>
    </ProfileLayout>
  );
}

export default Profile;
