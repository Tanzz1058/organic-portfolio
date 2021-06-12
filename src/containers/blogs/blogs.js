import React from "react";
import BlogContainer from "./blogContainer/blogContainer";

import blogOne from "../../assets/images/blog-one.png";
import blogTwo from "../../assets/images/blog-two.png";
import blogThree from "../../assets/images/blog-three.png";
import "./blogs.css";

const Blog = () => {
  return (
    <div className="blog-section">
      <span className="blog-section-span">Read Our Blog</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="blogs-container">
        <BlogContainer image={blogOne} />
        <BlogContainer image={blogTwo} />
        <BlogContainer image={blogThree} />
      </div>
    </div>
  );
};

export default Blog;
