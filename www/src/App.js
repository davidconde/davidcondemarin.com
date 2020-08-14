import React from 'react';
import BlogHeader from './components/header/index';

function App() {
  return (
    <div className="page">
      <div className="lmpixels-scroll-to-top"><i className="lnr lnr-chevron-up"></i></div>
      
      <div className="page-scroll">
        <div id="page_container" className="page-container bg-move-effect" data-animation="transition-flip-in-right">
          <BlogHeader />
        </div>
      </div>

    </div>
  );
}

export default App;
