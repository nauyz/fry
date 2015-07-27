var React = require('react');
var Header = require('./Header.react');
var MessageList = require('./MessageList.react');
var UserStore = require('../stores/UserStore');
var MessageStore = require('../stores/MessageStore');
var MessageActions = require('../actions/MessageActions');
var MessageService = require('../api/MessageServices');

var getFriendFromStores = function (id, type) {
    var friend = null;

    if (type === 'group') {
        friend = UserStore.getGroupById(id);
    } else {
        friend = UserStore.getFriendById(id);
    }

    return {
        friend: friend
    }
}
var getHistoriesFromStores = function (id) {
    return {
        histories: MessageStore.getHistoryById(id)
    }
}

var getUserFromStores = function () {
    return {
        user: UserStore.getUser()
    };
}

var Chat = React.createClass({
    getInitialState: function () {
        return {
            header: {},
            message: '',
            friend: null
        };
    },

    componentWillMount: function () {        
        var friendId = this.props.params.id;
        var type = this.props.query.type;

        var list = {};
        var header = {
            left: {
                name: '＜ 返回',
                url: '#/' + this.props.query.from
            },
            title: friendId
        };

        if (friendId) {
            list = getFriendFromStores(friendId, type);

            if (list.friend) {
                header.title = list.friend.name;
            }
        }
        
        this.setState({
            header: header,
            friend: list.friend
        });
        this.setState(getHistoriesFromStores(friendId));
        this.setState(getUserFromStores());
    },
    componentDidMount: function () {
        MessageStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        MessageStore.removeChangeListener(this._onChange);
    },

    //message: 'test',
    /**
     * @return {object}
     */
    render: function() {    
        return (
            <div className="chat">
                <Header header={this.state.header}></Header>
                <MessageList messages={this.state.histories} friend={this.state.friend} user={this.state.user}/>
                <div className="option">
                    <div className="message">
                        <textarea className="textarea" value={this.state.message} onChange={this._onMessageChange}></textarea>
                    </div>
                    <button className="am-btn am-btn-primary send" onClick={this._sendMessage}>发送</button>
                </div>
            </div>
        );
        
    },
    _onChange: function () {
        this.setState(getHistoriesFromStores(this.props.params.id));
    },
    _onMessageChange: function (event) {
        this.setState({
            message: event.target.value
        });
        //this[message] = event.target.value;
        // console.log(event.target.value);
    },
    _sendMessage: function () {
        var TYPE = 4;
        
        if (this.state.message) {
            MessageService.sendMessage(TYPE, this.props.params.id, this.state.message);
            this.setState({
                message: ''
            });
        } else {
            console.log('消息不能为空');
        }
    }
});

module.exports = Chat;
