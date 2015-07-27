var React = require('react');

var ArticleList = React.createClass({
    /**
     * @return {object}
     */
    render: function() {
        var contents = null;
        var articles = this.props.articles;

        if (!articles || articles.length === 0) {
            contents = <p>loding...</p>;
        } else {
            contents = articles.map(function (article, index) {
                return (
                    <div className="list">
                        <a className="list-link" href={'#/article/' + article.id}>
                            <p className="title">{article.title}</p>
                            <p className="other">
                                <span className="from">{article.from}</span>
                                <span className="date fr">{article.date}</span>
                                <span></span>
                            </p>
                        </a>
                        <div className="line"></div>
                    </div>
                );
            });
        }

        return (
            <div className="article-list">{contents}</div>
        );
    }
});

module.exports = ArticleList;
