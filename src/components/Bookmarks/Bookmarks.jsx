import PropTypes from "prop-types";
import Bookmark from "./../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div className="md:w-1/3 rounded-lg  space-y-4">
      <p className="text-2xl font-bold text-[#6047EC] bg-[#6047EC1A] p-5">
        Spent time on read : {time} min
      </p>
      <div className="bg-[#1111110D] rounded-lg p-7">
        <h1 className="text-[24px]  text-[#111111]  font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
};

export default Bookmarks;
