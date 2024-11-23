const axios = require("axios");
const BASE_URL = process.env.REACT_APP_BASE_API_PATH;

const fetchLatestBlogPosts = async () => {
  const fetchUrl = `${BASE_URL}/blog-posts`;
  console.log(fetchUrl)

  const rssFeed = await axios.get(fetchUrl);
  

  if (!rssFeed || !rssFeed.data || !rssFeed.data.response)
    return [];

  return rssFeed.data.response;
}

export default fetchLatestBlogPosts;