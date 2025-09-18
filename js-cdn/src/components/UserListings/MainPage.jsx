import React, { useLayoutEffect, useState } from "https://esm.sh/react@^18.3.1";
import PropTypes from "https://esm.sh/prop-types@^15.8.1?deps=react@^18.3.1,react-dom@^18.3.1";

import SellingListings from "./SellingListings";
import ListingsBought from "./ListingsBought";
import FavoriteListings from "./FavoriteListings";
import UserProfile from "./UserProfile";

function MainPage({ pageName }) {
  const [pageContent, setPageContent] = useState(() => SellingListings);

  useLayoutEffect(() => {
    switch (pageName) {
      case "Selling": {
        setPageContent(() => SellingListings);
        break;
      }
      case "Buying": {
        setPageContent(() => ListingsBought);
        break;
      }
      case "Favorites": {
        setPageContent(() => FavoriteListings);
        break;
      }
      case "User Profile": {
        setPageContent(() => UserProfile);
        break;
      }
    }
  }, [pageName]);

  return <section>{React.createElement(pageContent)}</section>;
}

MainPage.propTypes = {
  pageName: PropTypes.string,
};

export default MainPage;
