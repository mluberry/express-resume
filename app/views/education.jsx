require('rootpath')();

var React = require('react');

var EducationSection = React.createClass({
  render: function() {
    return (
      <div className="section" id="section5">
        <h2 className="section_title">Education</h2>
        <div className="section_content">
          <div className="studies">
            <h3>San Francisco State University</h3>
            <h4 className="mt10">Bachelor of Arts degree in Conceptual Design. Magna Cum Laude.</h4>
            <p>Vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>

          <div className="ruler"></div>

          <div className="studies">
            <h3>San Francisco School of the Arts</h3>
          <h4 className="mt10">Class of 1994</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          </div>
        </div>
        <div className="section_footer"><a href="#top" className="go_top">Back to top</a></div>
      </div>
    );
  }
});

module.exports = EducationSection;
