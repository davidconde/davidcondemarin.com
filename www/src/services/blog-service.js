let Parser = require('rss-parser');
let parser = new Parser();

const mapStory = (post) => {
  return {
    title: post.title,
    date: new Date(post.isoDate),
    link: post.link,
    snippet: post.content
  };
}

const fetchLatestBlogPosts = async () => {
  const rssFeed = "https://medium.com/feed/dcms-blog";
  let feed = await parser.parseURL(rssFeed);
  return feed.items.map(mapStory);
}

export default fetchLatestBlogPosts;