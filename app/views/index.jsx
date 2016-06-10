require('rootpath')();

var React = require('react');
var DefaultLayout = require('views/layouts/default');

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

          {/* Start: Section */}
          <div className="section" id="section2">
            <h2 className="section_title">Skills &amp; Knowledge (V.1)</h2>
            <div className="section_content">
              <div className="two_thirds"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p></div>
              <div className="one_third last_column">
                <div className="skill">
                  <h4>Adobe Photoshop</h4>
                  <div className="skillbar"><div className="skillbarfill skill100">Excellent</div></div>
                </div>
                <div className="skill">
                  <h4>Adobe Illustrator</h4>
                  <div className="skillbar"><div className="skillbarfill skill80">Good</div></div>
                </div>
                <div className="skill">
                  <h4>XHTML / CSS</h4>
                  <div className="skillbar"><div className="skillbarfill skill90">Excellent</div></div>
                </div>
                <div className="skill">
                  <h4>jQuery</h4>
                  <div className="skillbar"><div className="skillbarfill skill80">Good</div></div>
                </div>
              </div>
            </div>
            <div className="section_footer"><a href="#top" className="go_top">Back to top</a></div>
          </div>
          {/* End: Section */}

          {/* Start: Section */}
          <div className="section" id="section3">
            <h2 className="section_title">Skills &amp; Knowledge (V.2)</h2>
            <div className="section_content">
              <p>If the above style doesn't suit you, you could always find a different approach, like below:</p>

              <div className="text_ruler"><span>Graphic Skills</span></div>

              <div className="one_fourth">
                <div className="skill">
                  <h4>Adobe Photoshop</h4>
                  <div className="skillbar"><div className="skillbarfill skill100">Excellent</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
              <div className="one_fourth">
                <div className="skill">
                  <h4>Adobe Illustrator</h4>
                  <div className="skillbar"><div className="skillbarfill skill60">Good</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
              <div className="one_fourth">
                <div className="skill">
                  <h4>Adobe InDesign</h4>
                  <div className="skillbar"><div className="skillbarfill skill90">Excellent</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
              <div className="one_fourth last_column">
                <div className="skill">
                  <h4>Adobe Fireworks</h4>
                  <div className="skillbar"><div className="skillbarfill skill70">Good</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>

              <div className="text_ruler"><span>Coding Skills</span></div>

              <div className="one_fourth">
                <div className="skill">
                  <h4>XHTML / CSS</h4>
                  <div className="skillbar"><div className="skillbarfill skill100">Excellent</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
              <div className="one_fourth">
                <div className="skill">
                  <h4>jQuery</h4>
                  <div className="skillbar"><div className="skillbarfill skill80">Good</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
              <div className="one_fourth">
                <div className="skill">
                  <h4>PHP &amp; MySQL</h4>
                  <div className="skillbar"><div className="skillbarfill skill80">Good</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
              <div className="one_fourth last_column">
                <div className="skill">
                  <h4>WordPress</h4>
                  <div className="skillbar"><div className="skillbarfill skill90">Excellent</div></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              </div>
            </div>
            <div className="section_footer"><a href="#top" className="go_top">Back to top</a></div>
          </div>
          {/* End: Section */}

          {/* Start: Section */}
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
          {/* End: Section */}

          {/* Start: Section */}
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
          {/* End: Section */}

          {/* Start: Section */}
          <div className="section" id="section6">
            <h2 className="section_title">Portfolio</h2>
            <div className="section_content">
              <ul className="portfolio">
                <li><a href="img/sample-photos/sample-1.jpg" rel="portfolio"><img src="img/sample-photos/sample-1-tb.jpg" alt="" title="" /></a></li>
                <li><a href="img/sample-photos/sample-2.jpg" rel="portfolio"><img src="img/sample-photos/sample-2-tb.jpg" alt="" title="" /></a></li>
                <li><a href="img/sample-photos/sample-3.jpg" rel="portfolio"><img src="img/sample-photos/sample-3-tb.jpg" alt="" title="" /></a></li>
                <li className="last_in_row"><a href="img/sample-photos/sample-4.jpg" rel="portfolio"><img src="img/sample-photos/sample-4-tb.jpg" alt="" title="" /></a></li>
                <li><a href="img/sample-photos/sample-5.jpg" rel="portfolio"><img src="img/sample-photos/sample-5-tb.jpg" alt="" title="" /></a></li>
                <li><a href="img/sample-photos/sample-6.jpg" rel="portfolio"><img src="img/sample-photos/sample-6-tb.jpg" alt="" title="" /></a></li>
                <li><a href="img/sample-photos/sample-7.jpg" rel="portfolio"><img src="img/sample-photos/sample-7-tb.jpg" alt="" title="" /></a></li>
                <li className="last_in_row"><a href="img/sample-photos/sample-8.jpg" rel="portfolio"><img src="img/sample-photos/sample-8-tb.jpg" alt="" title="" /></a></li>
              </ul>
            </div>
            <div className="section_footer"><a href="#top" className="go_top">Back to top</a></div>
          </div>
          {/* End: Section */}

          <div className="clear"></div> {/* Do not remove */}
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = IndexContent;
