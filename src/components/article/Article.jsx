import React from "react";
import "./article.css";
const Article = ({ imgUrl, title, date }) => {
  return (
    <div className="gpt3_blog-article">
      <div className="article-img">
        <img src={imgUrl} alt="blog-img" />
      </div>
      <div className="article-content">
        <div className="article-content-header">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Real Full Article</p>
      </div>
    </div>
  );
};

export default Article;
