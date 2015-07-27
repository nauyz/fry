/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoConstants
 */

var keyMirror = require('keymirror');

module.exports = {
    UserTypes: keyMirror({
        GET_FRIEND_LIST: null,
        GET_GROUP_LIST: null,
        RECEIVE_FRIEND_LIST: null,
        RECEIVE_GROUP_LIST: null,
        RECEIVE_USER: null,
        RECEIVE_TOKEN: null
    }),

    MessageTypes: keyMirror({
        RECEIVE_CONVERSATION_LIST: null,
        RECEIVE_HISTORY_LIST: null,
        RECEIVE_MESSAGE: null,
        SEND_MESSAGE: null,
        ADD_HISTORY: null,
        ADD_CONVERSATION: null
    })
}