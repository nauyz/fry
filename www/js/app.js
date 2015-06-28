var React = require('react');
var Router = require('react-router');
var Header = require('./components/Header.react');
var Footer = require('./components/Footer.react');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


// var Footer = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <a href="#/dash">dash</a>
//                 <a href="#/about">about</a>
//                 <a href="#/inbox">inbox</a>
//             </div>
//         );
//     }
// });

var Dash = React.createClass({
    render: function () {
        return <h2>Dashboard</h2>
    }
});

var About = React.createClass({
    render: function () {
        var user = {name: 'zy', id: 1234};
        return (
            <div>
                <h2>About</h2>
                <a href="#/about/us">about us</a>
                <a href="#/about/app">about app</a>
                <RouteHandler user={user}/>
            </div>
        );
    }
});

var AboutUs = React.createClass({
    render: function () {
        console.log(this.props.user);
        return <h3>about us</h3>;
    }
});

var AboutApp = React.createClass({
    render: function () {
        return <h3>about app</h3>
    }
});

var Inbox = React.createClass({
    render: function () {
        return <h2>Inbox</h2>;
    }
});

var Home = React.createClass({
    render: function () {
        return <h2>Home</h2>;
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <RouteHandler/>
                <Footer/>
            </div>
        )
    }
});

// declare our routes and their hierarchy
var routes = (
	<Route handler={App}>
        <Route name="dashboard" path="dash" handler={Dash}></Route>
		<Route name="about" path="about" handler={About}>
            <Route name="about-us" path="us" handler={AboutUs}></Route>
            <Route name="about-app" path="app" handler={AboutApp}></Route>
        </Route>
		<Route name="inbox" path="inbox" handler={Inbox}/>
        <DefaultRoute name="default" handler={Inbox}/>
	</Route>
);

var RouteHandler = Router.RouteHandler;

Router.run(routes, function (Root, state) {
    console.log(Router)
    React.render(<Root/>, document.getElementById('app'));
});