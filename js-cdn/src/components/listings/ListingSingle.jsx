/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "https://esm.sh/react@^18.3.1";
import PropTypes from "https://esm.sh/prop-types@^15.8.1?deps=react@^18.3.1,react-dom@^18.3.1";
import { Link } from "https://esm.sh/react-router-dom@^6.24.1?deps=react@^18.3.1,react-dom@^18.3.1";
import {
  FaRegHeart,
  FaHeart,
} from "https://esm.sh/react-icons@^5.2.1/fa?deps=react@^18.3.1,react-dom@^18.3.1";
import { RiDeleteBin6Line } from "https://esm.sh/react-icons@^5.2.1/ri?deps=react@^18.3.1,react-dom@^18.3.1";
import RLLI from "https://esm.sh/react-lazy-load-image-component@^1.6.2?deps=react@^18.3.1,react-dom@^18.3.1";

import ImageLoader from "../reusable/ImageLoader";
import { ModalContext } from "../../context/ModalContext";

const { LazyLoadImage } = RLLI;

function ListingSingle({
  title,
  price,
  location,
  img,
  id,
  isSellerListings,
  setListingId,
}) {
  const [liked, setLiked] = React.useState(false);
  const [likedPosts, setLikedPosts] = React.useState([]);
  const { handleDeleteListingsToggle } = React.useContext(ModalContext);

  function handleLike(e) {
    console.log(e.target.id, "event");
    const listingId = e.target.id;
    e.stopPropagation();
    if (!likedPosts.includes(listingId)) {
      setLikedPosts((prevState) => {
        return [...prevState, listingId];
      });
    }
    setLiked(true);
    console.log(likedPosts, "liked posts");
  }

  function deleteListing() {
    handleDeleteListingsToggle();
    setListingId(id);
  }

  return (
    <div className="relative lg:border rounded-md text-lg mb-2 lg:p-2 transition ease-in-out hover:scale-105 duration-300 hover:shadow">
      <Link
        to={"/listing"}
        className="cursor-pointer h-full flex flex-col justify-between"
        onClick={window.scrollTo(0, 0)}
      >
        <LazyLoadImage
          src={img}
          alt="Listing Image"
          effect="blur"
          className="w-full lg:rounded-md aspect-[4/4] object-cover"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
        />
        <div className="flex justify-between">
          <div className="text-sm lg:text-base pl-2">
            <p className="font-medium text-lg">{price}</p>
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
        </div>
      </Link>
      {!isSellerListings ? (
        <div className="absolute top-2 right-2" onClick={(e) => handleLike(e)}>
          {!liked ? (
            <FaRegHeart
              id={id}
              className="hover:fill-[#720D96]"
              cursor={"pointer"}
            />
          ) : (
            <FaHeart id={id} color="#720D96" cursor={"pointer"} />
          )}
        </div>
      ) : (
        <div className="absolute top-2 right-2" onClick={deleteListing}>
          <RiDeleteBin6Line
            color="red"
            className="hover:scale-125 "
            cursor={"pointer"}
            size={`${window.innerWidth < 640 ? 25 : 20}`}
          />
        </div>
      )}
    </div>
  );
}

ListingSingle.propTypes = {
  isSellerListings: PropTypes.boolean,
};

export default ListingSingle;
