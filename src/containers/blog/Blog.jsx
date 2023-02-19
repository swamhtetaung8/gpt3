import React from "react";
import { Article } from "../../components";
import "./blog.css";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className=" gradient_text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupa">
          <Article
            imgUrl={blog01}
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
          />
        </div>
        <div className="gpt3_blog-container_groupb">
          <Article
            imgUrl={blog02}
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
          />
          <Article
            imgUrl={blog03}
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
          />
          <Article
            imgUrl={blog04}
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
          />
          <Article
            imgUrl={blog05}
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
