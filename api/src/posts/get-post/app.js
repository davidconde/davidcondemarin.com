const {ResponseUtil} = require("dcm-lambda-utils");


exports.lambdaHandler = async (event, context) => {
  try {
      

      return ResponseUtil.OK({
          done: true,
          response: {}
      });
  } catch (err) {
      console.log(err);
      return err;
  }    
};