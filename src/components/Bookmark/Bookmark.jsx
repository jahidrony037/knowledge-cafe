import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-[#FFFFFF] rounded-lg mt-4">
      <p className="text-lg p-[20px] text-[#111111]">{title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
