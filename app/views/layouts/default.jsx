require('rootpath')();

var React = require('react');

var Footer = require('views/footer');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
        	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
        	<meta name="viewport" content="width=970,user-scalable=yes" />
        	<link rel="stylesheet" type="text/css" media="all" href="css/style.css" />
        	<link  href="http://fonts.googleapis.com/css?family=Puritan:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css" />
        	<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
        	<script src="http://code.jquery.com/jquery-migrate-1.0.0.js" type="text/javascript"></script>
        	<script src="lib/js/jquery.form.js" type="text/javascript"></script>
        	<script src="lib/js/jquery.validate.min.js" type="text/javascript"></script>
        	<script src="lib/js/jquery.custom.minimalme.js" type="text/javascript"></script>
        	<link rel="stylesheet" type="text/css" href="lib/js/tipsy/stylesheets/tipsy.css" />
        	<script type="text/javascript" src="lib/js/tipsy/javascripts/jquery.tipsy.js"></script>
          <script dangerouslySetInnerHTML={{__html: `
          	jQuery(document).ready(function($){
          		$('#social_media a').tipsy({gravity: 's', opacity: 0.9, fade: true});
          		$('#nav a').tipsy({gravity: 's', opacity: 0.9, fade: true});
          		$('.cv_options a').tipsy({gravity: 's', opacity: 0.9, fade: true});
          	});
          `}} />

        	<link rel="stylesheet" type="text/css" href="lib/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
        	<script type="text/javascript" src="lib/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
        	<script type="text/javascript" src="lib/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
          <script dangerouslySetInnerHTML={{__html: `
            jQuery(document).ready(function($){
          		$(".portfolio a").fancybox({
          			'padding'			: 10,
          			'titlePosition' 	: 'over',
          			'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) { return '<span id="fancybox-title-over"><strong>' +  (currentIndex + 1) + ' / ' + currentArray.length + '</strong> ' + title + '</span>'; },
          			'transitionIn'		: 'fade',
          			'transitionOut'		: 'fade',
          			'overlayColor'		: '#000',
          			'overlayOpacity'	: 0.8
          		});
          	});
          `}} />
        </head>
        <body id="top" class="default">
          {this.props.children}

          <Footer />
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
