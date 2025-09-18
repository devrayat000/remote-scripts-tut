/* eslint-disable react/prop-types */
import { createContext, useState } from "https://esm.sh/react@^18.3.1";
import { singleListingData } from "../data/singleListingData";

const SingleListingContext = createContext();

export function SingleListingProvider({ children }) {
  const [singleListing, setSingleListing] = useState(singleListingData);
  return (
    <SingleListingContext.Provider value={{ singleListing, setSingleListing }}>
      {children}
    </SingleListingContext.Provider>
  );
}

export default SingleListingContext;
