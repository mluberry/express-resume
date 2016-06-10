require('rootpath')();

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div id="footer">
        <div class="section">
          <div class="section_content">
            <div class="one_third">
              <h3 class="footer_title"><span>Sites I Love</span></h3>
              <ul>
                <li><a href="http://qbkl.net">QBKL Studio - Web Design Studio</a></li>
                <li><a href="http://blogsessive.com">Blogsessive.com - Blogging Tips</a></li>
                <li><a href="http://themeforest.net/?ref=QBKL">ThemeForest</a></li>
                <li><a href="http://themeforest.net/?ref=QBKL">Click here to buy <strong>MinimalMe</strong></a></li>
              </ul>
            </div>
            <div id="emailme" class="one_third last_column">
              <h3 class="footer_title"><span>Contact me</span></h3>
              <form name="contact_form" id="contact_form" action="">
                <div id="contact_form_message"></div>
                <div id="fields">
                  <p><label for="contact_name">Name</label><input class="text_box" type="text" name="name" id="contact_name" value="" /></p>
                  <p><label for="contact_email">E-Mail</label><input class="text_box" type="text" name="email" id="contact_email" value="" /></p>
                  <p><label for="contact_subject">Subject</label><input class="text_box" type="text" name="subject" id="contact_subject" value="" /></p>
                  <p><label for="contact_message">Message</label><textarea class="text_box" name="message" rows="7" id="contact_message" cols="25"></textarea></p>
                  <p><label>&nbsp;</label><input class="button" type="submit" name="submit" value="Send Message" /></p>
                  <p><label>&nbsp;</label><strong>All</strong> the above fields are <strong>required</strong>.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
