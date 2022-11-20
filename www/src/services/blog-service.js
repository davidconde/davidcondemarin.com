let Parser = require('rss-parser');
const { DateTime } = require("luxon");
const axios = require("axios");

let parser = new Parser();

const fetchCount = 4;
const genericImage = "/img/blog_post.jpg";

const getPostImage = (postContent) => {
  if (!postContent)
    return genericImage;

  const regex = new RegExp("<img src=\"(.+?)\"");
  const matches = regex.exec(postContent);

  if (!matches || matches.length === 0)
    return genericImage;
  
  return matches[1];  
}

const mapStory = (post) => {

  const date = DateTime.fromISO(post.isoDate);
  const formattedDate = date.toFormat("dd LLL yyyy");
  const postImage = getPostImage(post.content);

  return {
    title: post.title,
    date: formattedDate,
    link: post.link,
    image: postImage
  };
}



const fetchLatestBlogPosts = async () => {
  const rssFeed = await axios.get("http://localhost:3000/blog-posts");

  if (!rssFeed.data || !rssFeed.data.response)
    return [];

  return rssFeed.data.response;
}

export default fetchLatestBlogPosts;