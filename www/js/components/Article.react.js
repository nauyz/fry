var React = require('react');

var Article = React.createClass({
    /**
     * @return {object}
     */
    render: function() {
        var article = {
            title: '',
            id: '',
            content: '',
        };

        var id = this.props.params.id;


        console.log(this.props);
        return (
            <div>{this.props.params.id}</div>
        );
    }
});

module.exports = Article;
