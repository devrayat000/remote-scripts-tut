import React from "https://esm.sh/react@^18.3.1";
import { ListingsProvider } from "../context/ListingsContext";
import ListingsGrid from "../components/listings/ListingsGrid";
import { Link } from "https://esm.sh/react-router-dom@^6.24.1?deps=react@^18.3.1,react-dom@^18.3.1";
import { IoMdArrowBack } from "https://esm.sh/react-icons@^5.2.1/io?deps=react@^18.3.1,react-dom@^18.3.1";
import SearchInput from "../components/SearchInput";

function SearchPage() {
  const [mouseEnter, setMouseEnter] = React.useState(false);

  return (
    <div>
      <ListingsProvider>
        <div className="flex items-center justify-between p-3 border-b">
          <Link
            to={"/listings"}
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
          >
            <IoMdArrowBack
              size={20}
              className={`${
                mouseEnter ? "transition ease-in-out w-8 duration-500" : ""
              }`}
            />
            <p className="text-sm">Search Marketplace</p>
          </Link>
        </div>
        <hr />
        <SearchInput />
        <ListingsGrid />
      </ListingsProvider>
    </div>
  );
}

export default SearchPage;
