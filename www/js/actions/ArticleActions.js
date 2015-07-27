var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppContansts = require('../constants/Constants');
var ArticleService = require('../api/ArticleServices');
var UserTypes = AppContansts.UserTypes;

var ArticleActions = {
    receiveFriends: function (friends) { 
        AppDispatcher.dispatch({
            actionType: UserTypes.RECEIVE_FRIEND_LIST,
            friends: friends
        });
    },
    receiveGroups: function (groups) {
        AppDispatcher.dispatch({
            actionType: UserTypes.RECEIVE_GROUP_LIST,
            groups: groups
        });
    },
    receiveUser: function (user) {
        AppDispatcher.dispatch({
            actionType: UserTypes.RECEIVE_USER,
            user: user
        })
    },
    receiveToken: function (token) {
        AppDispatcher.dispatch({
            actionType: UserTypes.RECEIVE_TOKEN,
            token: token
        });

        MessageService.getConect(token);
    }
}

module.exports = ArticleActions;
