import React from "react";

const BlogContainer = (props) => {
  return (
    <div className="blog-box">
      <img src={props.image} alt="blog-post" />
      <h2>Blog Post One</h2>
      <p>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit, sed
        <br />
        do eiusmod.
      </p>
      <span className="blog-box-span">Read More</span>
    </div>
  );
};

export default BlogContainer;
