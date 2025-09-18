import React from "https://esm.sh/react@^18.3.1";
import { Link } from "https://esm.sh/react-router-dom@^6.24.1?deps=react@^18.3.1,react-dom@^18.3.1";

function ListingCard({ $id, title, feaaturedImage, price }) {
  return (
    <Link to={`/listing/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 "></div>
    </Link>
  );
}

export default ListingCard;
