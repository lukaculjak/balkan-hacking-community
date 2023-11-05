import {
  ProfileLayout,
  ProfileWrapper,
  ProfileSettings,
} from "../../style/Profile-styles";
import { ProfileControlButtons, ProfileButton } from "../../../../ui/Button";
import ProfilePicture from "../../../../assets/default-profile-picture.svg";

function Profile() {
  return (
    <ProfileLayout>
      <ProfileWrapper>
        <div>
          <div>
            <img src={ProfilePicture} alt="user profile picture" />
          </div>
          <p>Ime</p>
          <p>Prezime</p>
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
