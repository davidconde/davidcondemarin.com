import React from 'react';

import BlogPosts from './blog-posts';

const sections = () => {
  return <React.Fragment>
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="p-50"></div>

              <div className="block-title">
                <h2>What I Do</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-aws"></i>
                  </div>

                  <div className="ci-text">
                    <h4>AWS</h4>
                    <p>
                    I have been working with AWS for the last 7+ years. In my first job in the UK as a Consultant for Intechnica, I started my journey working with AWS which has continued throughout my career until today. I have worked with EC2, DynamoDB, AWS RDS, AWS Aurora and of course AWS Lambda.
                    </p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-cloud-check"></i>
                  </div>

                  <div className="ci-text">
                    <h4>Serverless</h4>
                    <p>
                    Serverless is a topic quite close to my heart. I have worked in teams that had to do a large percent of Ops and I know the cost of having to maintain software and update servers, as well as all the operational costs of running a product. Serverless is my favourite way of scaling products quickly and making sure developers can focus on value and not on having to maintain servers.
                    </p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-bullhorn"></i>
                  </div>

                  <div className="ci-text">
                    <h4>Speaker</h4>
                    <p>
                    For a few years I was a teacher in my home town's university, teaching Data Structures and then a semester of Software Engineering. Whilst I don't teach in universities anymore I still enjoy public speaking whenever I can, especially to talk about all things Serverless.
                    </p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-chef-hat"></i>
                  </div>

                  <div className="ci-text">
                    <h4>Cooking</h4>
                    <p>
                      I am incredibly passionate about food. I love sourcing local quality ingredients and turning them into something exciting that anyone enjoys eating. I am very interested in sustainable food practices and making sure our diet does not mean we leave a broken world behind us. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="info-list-w-icon">

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-cart"></i>
                  </div>

                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                    I've been working in eCommerce for a few years now. Initially as a Senior Developer working for one of the UK's online retail giants ao.com and then moving to rentalcars.com that is now a part of the Booking.com family. Both ao.com and Booking.com face very similar problems as part of their respective business models: How do we provide a service that customers find appealing enough to buy?
                    </p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-grow"></i>
                  </div>

                  <div className="ci-text">
                    <h4>People</h4>
                    <p>
                    In my experience, one of the most easily forgotten things in the Engineering world are: the people that build the teams. Over the years, I've played my role in building teams, growing people managers and supporting them with shaping high-performing teams. I particularly enjoy the differences between different cultures. Coming from a different culture than the UK myself, I enjoy working out how different people react to different communication styles, and to educate my team leads on how to best adapt their style of communication in order to get the best out of their developers.
                    </p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-camera"></i>
                  </div>

                  <div className="ci-text">
                    <h4>Photography</h4>
                    <p>
                      I love photography, be that pictures of landscapes, night time photography, compositions, HDRs and all sorts. Photography can be one of the best ways to get lost on a scene or a moment and to then bring it back in memory. It also gives me a very good excuse to go explore whenever possible!
                    </p>
                  </div>
                </div>

                
              </div>
              
            </div>
            <BlogPosts />
          </div>
  </React.Fragment>;
};

export default sections;