require('rootpath')();

var React = require('react');

var SkillsSection = React.createClass({
  render: function() {
    return (
      <div class="skills">
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
      </div>
    );
  }
});

module.exports = SkillsSection;
