// import React from "https://esm.sh/react@^18.3.1";
import PersonalPageLayout from "../components/shared/Layouts/PersonalPageLayout";
import MainPage from "../components/UserListings/MainPage";

function Favorites() {
  return (
    <div>
      <PersonalPageLayout pageName={"Favorites"}>
        <MainPage pageName={"Favorites"} />
      </PersonalPageLayout>
    </div>
  );
}

export default Favorites;
