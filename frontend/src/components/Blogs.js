import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog"
const port = process.env.PORT || 5000;

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:${port}/api/blog`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      if (data.blogs) {
        setBlogs(data.blogs);
      }
    });
  }, []);
  console.log(blogs);
  return (
      <div>
        {blogs &&
          blogs.map((blog, index) => (
            <Blog
              id={blog._id}
              isUser={localStorage.getItem("userId") === blog.user?._id}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={blog.user?.name}
            />
          ))}
      </div>
    );
};

export default Blogs;