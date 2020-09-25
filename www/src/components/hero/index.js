import React from 'react';

const hero = () => {
  return <div className="row">
          <div className=" col-xs-12 col-sm-12">
            <div className="home-content">
              <div className="row flex-v-align">
                
                <div className="col-sm-12 col-md-5 col-lg-5">
                  <div className="home-photo">
                    <div className="hp-inner" style={{"backgroundImage": "url(./img/profile.png)"}}>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-7 col-lg-7">
                  <div className="home-text hp-left">
                      
                    <h1>David Conde Marin</h1>
                    <p>I'm a passionate developer, failed photographer, amateur chef and a very self-driven and curious person. My main interests are software development and architecture, although I enjoy anything that requires thinking, creating and using my brain.</p>
                    <p>I have a keen interest in Serverless systems and how distributed applications and clear application boundaries can help companies scale and thrive. I always aim for operational excellence and bring a DevOps culture to the teams, so they can truly make the best products possible.</p>
                        
                    <div className="home-buttons">
                      <a href="https://www.linkedin.com/in/davidcondemarin/" target="_blank" className="btn btn-primary">LinkedIn CV</a>
                      <a href="mailto:dcm@davidcondemarin.com" target="_self" className="btn btn-secondary">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
}

export default hero;