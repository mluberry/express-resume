require('rootpath')();

var React = require('react');
var DefaultLayout = require('views/layouts/default');

var IndexContent = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </DefaultLayout>
    );
  }
});

module.exports = IndexContent;
