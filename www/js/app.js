var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./components/App.react');
var Articles = require('./components/Articles.react');
var Article = require('./components/Article.react');
var Login = require('./components/Login.react');
//var ArticleService = require('./api/ArticleServices');
var DefaultRoute = Router.DefaultRoute;

// declare our routes and their hierarchy
var routes = (
	<Route handler={App}>
        <Route name="login" path="login" handler={Login}></Route>
        <Route name="articles" path="list" handler={Articles}></Route>
        <Route name="article" path="article/:id" handler={Article}></Route>
        <DefaultRoute name="default" handler={Articles}/>
	</Route>
);

Router.run(routes, function (Root, state) {
    React.render(<Root/>, document.getElementById('app'));
});