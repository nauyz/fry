var $ = require('jquery');
var UserActions = require('../actions/ArticleActions');

var HOST = '';
var PATH = {

};

var UserService = {
    //get friend's list
    getFriends: function () {
        var url = HOST + PATH.USERS;
        var self = this;

        $.get(url)
            .success(function (result) {
                if (result.status) {
                    var items = result.data;

                    UserActions.receiveFriends(items);
                } else {
                    self.gotoLogin();
                }
            })
            .fail(function (error, status) {
                self.gotoLogin();
                console.error('加载联系人失败');
            })

        
    },

    //获取登陆用户信息
    login: function (username, password) {
        //var token = 'hWsPP1e5e3fmel2tevNSnxVs10mm3t3Mw+eJzQvCzsIg2H/1XRFRpGAmXwdYQ5KFf98sNj014B4Bu42nGbua008BArTo9RH6M72pm0PAIgkAIk3iwKji6A==';
        var url = HOST + PATH.LOGIN;

        $.post(url, {name: username, password: password})
            .success(function (result) {
                if (result.status) {
                    var token = result.data.token;
                    var user  = result.data.userInfo;
                    
                    UserActions.receiveToken(token);
                    UserActions.receiveUser(user); 

                    window.location = '/#/chats';
                } else {

                }
            })
            .fail(function (error, status) {
                
            });
    }
};

module.exports = UserService;
