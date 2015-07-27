var React = require('react');
var Header = require('./Header.react');
var ArticleList = require('./ArticleList.react');
var ArticleStore = require('../stores/ArticleStore');
var ArticleActions = require('../actions/ArticleActions');
//var ArticleService = require('../api/ArticleServices');

var getUserFromStores = function () {
    return {
        user: UserStore.getUser()
    };
}

var Chat = React.createClass({
    getInitialState: function () {
        return {
            header: {},
            friend: null
        };
    },

    componentWillMount: function () { 

    },

    componentDidMount: function () {
        ArticleStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ArticleStore.removeChangeListener(this._onChange);
    },

    //message: 'test',
    /**
     * @return {object}
     */
    render: function() {    
        var articles = [{
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }, {
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }, {
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }, {
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }, {
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }, {
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }, {
            title: '贾玲不再接演央视知名综艺 制片人:我劝她道歉',
            id: 3,
            from: '法制晚报',
            date: '2015.7.14'
        }];

        return (
            <div className="articles">
                <Header/>
                <ArticleList articles={articles}/>
            </div>
        );
        
    },
    _onChange: function () {
        //this.setState(getHistoriesFromStores(this.props.params.id));
    }
});

module.exports = Chat;
