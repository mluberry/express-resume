require('rootpath')();

var React = require('react');

var PortfolioSection = React.createClass({
  render: function() {
    return (
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
    );
  }
});

module.exports = PortfolioSection;
