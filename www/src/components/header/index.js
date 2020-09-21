import React from 'react';

const blogHeader = () => {
  return <div className="header">
          <div className="header-content clearfix">
                
            <div className="text-logo">
              <a href="index.html">
                <div className="logo-symbol">D</div>
                <div className="logo-text">David <span>Conde Marin</span></div>
              </a>
            </div>

            <div className="site-nav mobile-menu-hide">
              <ul className="leven-classNameic-menu site-main-menu">
                <li className="menu-item current-menu-item">
                  <a href="index.html">About Me</a>
                </li>

                <li className="menu-item">
                  <a href="https://www.linkedin.com/in/davidcondemarin/" target="new">Resume</a>
                </li>
                
                <li className="menu-item">
                  <a href="https://medium.com/dcms-blog/" target="new">Blog</a>
                </li>
              </ul>
            </div>

            <a className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>;
}

export default blogHeader;