/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var Header = React.createClass({
    /**
     * @return {object}
     */
    render: function() {
        var left = null;
        var title = null;
        var right = null;

        title = <h1 className="center-nav">阅读理解</h1>;
        right = <div className="right-nav"></div>;

        return (
            <header id="header" className="header">
                {left}
                {title}
                {right}
            </header>
        );
    }
});

module.exports = Header;
