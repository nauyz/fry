var React = require('react');
var Router = require('react-router');
var Header = require('./Header.react');
var Footer = require('./Footer.react');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var ReactPropTypes = React.PropTypes;

var App = React.createClass({
    render: function() {
        return (
            <RouteHandler/>
        )
    }
});

module.exports = App;
