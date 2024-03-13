import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, seTreadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const remaining = [...bookmarks];
    const another = remaining.find((book) => book.id === blog.id);
    // console.log(another);
    if (!another) {
      setBookmarks([...bookmarks, blog]);
    } else {
      return alert("this blog already");
    }
  };

  const handleMarkAsRead = (time, id) => {
    // console.log("time", typeof time);
    console.log(id);

    seTreadingTime(readingTime + time);

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto md:flex md:gap-6 mt-8 px-2 md:px-0">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} time={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
