let Parser = require('rss-parser');
const { DateTime } = require("luxon");

let parser = new Parser();

const fetchCount = 4;

const mapStory = (post) => {

  const date = DateTime.fromISO(post.isoDate);
  const formattedDate = date.toFormat("dd LLL yyyy")

  return {
    title: post.title,
    date: formattedDate,
    link: post.link,
    snippet: post.content
  };
}

const fetchLatestBlogPosts = async () => {
  const rssFeed = "https://medium.com/feed/dcms-blog";
  let feed = await parser.parseURL(rssFeed);
  return feed.items.slice(0, fetchCount).map(mapStory);
}

export default fetchLatestBlogPosts;