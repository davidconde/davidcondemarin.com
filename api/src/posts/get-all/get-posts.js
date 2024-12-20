let Parser = require('rss-parser');
const { DateTime } = require("luxon");

const fetchCount = 6;
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
  let parser = new Parser();
  const rssFeed = "https://medium.com/feed/dcms-blog";
  let feed = await parser.parseURL(rssFeed);
  return feed.items.slice(0, fetchCount).map(mapStory);
}

module.exports = fetchLatestBlogPosts;