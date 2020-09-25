import React, { useState, useEffect } from 'react';
const fetchLatestBlogPosts = require("./../../services/blog-service.js").default;

const renderBlogPosts = (posts) => {
  if (posts.length === 0)
    return null;

  return posts.map(renderBlogPost);
};

const renderBlogPost = (post) => {
  return <React.Fragment key={post.link}>
    <div className="item">
      <div className="blog-card">
        <div className="media-block">
          <a href={post.link} target="_blank">
            <img src={post.image} alt={post.title} title={post.title} />
            <div className="mask"></div>
          </a>
        </div>
        <div className="post-info">
          <div className="post-date"> {post.date} </div>
          <a href={post.link}>
            <h4 className="blog-item-title">{post.title}</h4>
          </a>
        </div>
      </div>
    </div>
  </React.Fragment>;
}

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect( () => {
    if (!fetching){
      setFetching(true);

      fetchLatestBlogPosts().then((results) => {
        setPosts(results)
      });
    }
  });

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <div className="p-50"></div>

        <div className="block-title">
          <h2>Latest blog posts</h2>
        </div>
      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-12 ">
          <div className="blog-masonry two-columns clearfix">
            {renderBlogPosts(posts)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;