import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => {
        return <Blog blog={blog} key={blog.id} {...props} />;
      })}
    </div>
  );
};

Blog.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blogs;
