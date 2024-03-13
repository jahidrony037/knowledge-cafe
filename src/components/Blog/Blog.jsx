import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-2">
      <img
        src={cover}
        className="w-full rounded-lg"
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <img className="w-[60px] h-[60px]" src={author_img} alt="" />
          <div>
            <h1 className="text-2xl font-bold">{author}</h1>
            <p className="text-[16px] font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div>
          <span className="text-[20px] font-medium text-[#11111199]">
            {reading_time} min read
            <button
              className="ml-2 text-red-600"
              onClick={() => handleAddToBookmark(blog)}
            >
              <FaBookmark></FaBookmark>
            </button>
          </span>
        </div>
      </div>
      <h2 className="md:text-4xl text-xl text-center md:text-left"> {title}</h2>
      <p>
        {hashtags.map((hash, i) => (
          <span
            key={i}
            className="ml-2 text-[20px] font-medium text-[#11111199]"
          >
            # {hash}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="underline text-[#6047EC] text-[20px] font-semibold mt-5"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
