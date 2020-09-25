import React from 'react';

import BlogHeader from './components/header/index';
import Hero from './components/hero/index';
import Sections from './components/section/index';
import BlogPosts from './components/section/blog-posts';

function App() {
  return (
    <div className="page">
      <div className="lmpixels-scroll-to-top"><i className="lnr lnr-chevron-up"></i></div>
      
      <div className="page-scroll">
        <div id="page_container" className="page-container bg-move-effect" data-animation="transition-flip-in-right">
          <BlogHeader />

          <div className="site-main">
            <div id="main-content" className="single-page-content">
              <div id="primary" className="content-area">    
                <div id="content" className="page-content site-content single-post" role="main">
                  <Hero />
                  <Sections />
                  <BlogPosts />
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
