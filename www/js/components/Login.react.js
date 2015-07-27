var React = require('react');
var Header = require('./Header.react');
var UserSerivce = require('../api/ArticleServices');

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: ''
        }
    },

    /**
     * @return {object}
     */
    render: function() {
        return (
            <div className="login">
                <div className="enterplorer">
                    <p>欢迎登录 Enterplorer IM</p>
                </div>
                <div className="login-form">
                    <legend>登录</legend>
                    <div className="am-form-group">
                        <p for="doc-ipt-email-1">邮件</p>
                        <input type="text" className="" id="doc-ipt-email-1" placeholder="输入电子邮件" onChange={this._onNameChange}/>
                    </div>

                    <div className="am-form-group">
                        <p for="doc-ipt-pwd-1">密码</p>
                        <input type="password" className="" id="doc-ipt-pwd-1" placeholder="输入密码" onChange={this._onPasswordChange}/>
                    </div>
                    <div className="am-option">
                        <button className="am-btn am-btn-success" onClick={this._login}>登录</button>
                    </div>
                </div>
            </div>
        );
    },
    _onNameChange: function (event) {
        if (event.target.value) {
            this.setState({
                username: event.target.value
            });
        }
    },
    _onPasswordChange: function (event) {
        if (event.target.value) {
            this.setState({
                password: event.target.value
            });
        }

    },
    _login: function () {
        if (this.state.username && this.state.password) {
            UserSerivce.login(this.state.username, this.state.password);
        } else {
            aler('用户名密码不能为空!');
        }
    }
});

module.exports = Login;
