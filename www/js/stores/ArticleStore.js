/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');
var UserTypes = Constants.UserTypes;

var CHANGE_EVENT = 'change';

var _friends = [];
var _groups = [];
var _user = {};

var UserStore = assign({}, EventEmitter.prototype, {
	initFriends: function (friends) {
		_friends = friends;
	},

	initGroups: function (groups) {
		_groups = groups;
	},

	initUser: function (user) {
		_user = user;
	},

	getUser: function () {
		return _user;
	},

	getFriends: function () {
		return _friends;
	},

	getFriendById: function (id) {
		var friend = null;
		
		for (var i = 0; i <= _friends.length - 1; i ++) {
			if (_friends[i]._id == id) {
				friend = _friends[i];
				break;
			}
		}
		
		return friend;
	},

	getGroups: function () {
		return _groups;
	},

	getGroupById: function (id) {
		var group = null;

		for (var i = 0; i <= _groups.length - 1; i ++) {
			if (_groups[i]._id === id) {
				group = _groups[i];
				break;
			}
		}

		return group;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
	var text;

	switch(action.actionType) {
		case UserTypes.RECEIVE_FRIEND_LIST:
			var friends = action.friends;

			if (friends) {
				UserStore.initFriends(friends);
				UserStore.emitChange();
			}
			break;

		case UserTypes.RECEIVE_GROUP_LIST:
			var groups = action.groups;

			if (groups) {
				UserStore.initGroups(groups);
				UserStore.emitChange();
			}
			break;

		case UserTypes.RECEIVE_USER:
			var user = action.user;

			if (user) {
				UserStore.initUser(user);
				UserStore.emitChange(user);
			}
			break;

		default:
			// no op
	}
});

module.exports = UserStore;
