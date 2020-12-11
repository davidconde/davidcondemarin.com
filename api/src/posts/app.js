const {ResponseUtil} = require("dcm-lambda-utils");
const fetchLatestBlogPosts = require("./get-posts");

exports.lambdaHandler = async (event, context) => {
    try {
        response = await fetchLatestBlogPosts();

        return ResponseUtil.OK({
            done: true,
            response: response
        });
    } catch (err) {
        console.log(err);
        return err;
    }    
};
