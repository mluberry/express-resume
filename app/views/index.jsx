require('rootpath')();

var React = require('react');

var DefaultLayout = require('views/layouts/default');
var ExperienceSection = require('views/Experience');
var EducationSection = require('views/education');
var PortfolioSection = require('views/portfolio');
var SkillsSection = require('views/skills');

var IndexContent = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="resume">
          {/* Start: Social media */}
          <div id="social_media">
            <ul>
              <li><a href="#" title="Blog">Blog</a></li><li><a href="#" title="Twitter">Twitter</a></li><li><a href="#" title="Facebook">Facebook</a></li><li><a href="#" title="LinkedIn">LinkedIn</a></li><li><a href="#" title="Flickr">Flickr</a></li><li><a href="#" title="YouTube">YouTube</a></li><li><a href="#" title="Yahoo Messenger">Yahoo</a></li><li><a href="#" title="Skype">Skype</a></li>
            </ul>
          </div>
          {/* End: Social media */}

          {/* Start: Header section */}
          <div className="section head_section">
            <div className="section_content">
              <div className="my_info">
                <h1 className="my_name" title="">Nathan McMillan</h1>
                <div className="my_profession">Senior Pixel Exploiter</div>
              </div>

              <div className="text_ruler"><span>Let's Connect</span></div>

              <div className="two_thirds">
                <img src="img/my-photo.jpg" title="" alt="" className="my_photo" />Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.
                <ul className="cv_options">
                  <li><a href="#letsmeet" title="Get in touch" className="cv_email">Let's meet!</a></li>
                  <li><a href="#" title="Download my resume" className="cv_download">Download my resume</a></li>
                </ul>
              </div>

              <div className="one_third last_column">
                <ul className="simple_list">
                  <li><strong>Email:</strong> <a href="mailto:nathan.mcmillan@emailer.com">nathan.mcmillan@emailer.com</a></li>
                  <li><strong>Website:</strong> <a href="http://nathanmcmillan.com">http://nathanmcmillan.com</a></li>
                  <li><strong>Phone:</strong> (+12) 345.67.89</li>
                  <li><strong>Address:</strong> 15 Fictive Street, City, Country</li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: Header section */}

          {/* Start: Navigation */}
          <div id="nav">
            <ul>
              <li><a href="#section1" title="Who is Nathan McMillan?">About</a></li><li><a href="#section2" title="Skills: Version 1">Skills One</a></li><li><a href="#section3" title="Skills: Version 2">Skills Two</a></li><li><a href="#section4" title="Work Experience">Experience</a></li><li><a href="#section5" title="Education">Education</a></li><li><a href="#section6" title="Portfolio">Portfolio</a></li><li><a href="#footer" title="Contact me">Contact</a></li>
            </ul>
          </div>
          {/* End: Navigation */}

          {/* Start: Section */}
          <div className="section" id="section1">
            <h2 className="section_title">Who is Nathan McMillan?</h2>
            <div className="section_content">
              <div className="half">Lorem ipsum dolor sit amet, <a href="#">consectetuer adipiscing elit</a>, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
              <div className="half last_column">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>
            </div>
            <div className="section_footer"><a href="#top" className="go_top">Back to top</a></div>
          </div>
          {/* End: Section */}

          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <PortfolioSection />

          <div className="clear"></div>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = IndexContent;
