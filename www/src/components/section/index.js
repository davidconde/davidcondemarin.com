import React from 'react';

const content = [
  {
    icon: "",
    title: "",
    description: ""
  }
];

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
                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-display"></i>
                  </div>

                  <div className="ci-text">
                    <h4>Serverless</h4>
                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
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
                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lni lni-grow"></i>
                  </div>

                  <div className="ci-text">
                    <h4>People</h4>
                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </React.Fragment>;
};

export default sections;