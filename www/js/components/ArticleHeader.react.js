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
        var header = this.props.header;
        var left = null;
        var title = null;
        var right = null;

        if (header && header.left) {
            left = <div className="left-nav"><a href={header.left.url}>{header.left.name}</a></div>;
        }

        if (header && header.title) {
            title = <h1 className="center-nav">{header.title}</h1>;
        }

        if (header && header.right) {
            right = <div className="right-nav"><a href={header.right.url}>{header.right.name}</a></div>;
        }

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
