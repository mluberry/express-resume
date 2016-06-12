require('rootpath')();

var React = require('react');

var ExperienceSection = React.createClass({
  render: function() {
    return (
      <div className="section" id="section4">
        <h2 className="section_title">Work Experience</h2>
        <div className="section_content">
          <div className="job">
            <div className="one_third">
              <h3 className="mt0">Senior Pixel Exploiter</h3>
              <h4>Fictive Web Company</h4>

              <ul className="simple_list mt20">
                <li><strong>Period:</strong> January 2008 - Present day</li>
                <li><strong>Job type:</strong> Full-Time</li>
                <li><strong>References:</strong> Michael Smith</li>
              </ul>
            </div>
            <div className="two_thirds last_column">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.</p>
              <ul>
                <li>Placerat facer possim assum;</li>
                <li>Typi non habent claritatem insitam;</li>
                <li>Legere me lius quod ii legunt saepius.</li>
              </ul>
            </div>
          </div>

          <div className="ruler"></div>

          <div className="job">
            <div className="one_third">
              <h3 className="mt0">Junior Pixel Exploiter</h3>
              <h4>Another Fictive Company</h4>

              <ul className="simple_list mt20">
                <li><strong>Period:</strong> March 2005 - December 2007</li>
                <li><strong>Job type:</strong> Full-Time</li>
                <li><strong>References:</strong> N/A</li>
              </ul>
            </div>
            <div className="two_thirds last_column">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.</p>
              <ul>
                <li>Placerat facer possim assum;</li>
                <li>Typi non habent claritatem insitam;</li>
                <li>Legere me lius quod ii legunt saepius.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_footer"><a href="#top" className="go_top">Back to top</a></div>
      </div>
    );
  }
});

module.exports = ExperienceSection;
