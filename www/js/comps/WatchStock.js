var React = require('react');

var WatchStock = React.createClass({
    getInitialState: function() {
        return {symbol: ""};
    },
    watchStock: function() {
        this.props.watchStockHandler(this.state.symbol);
        this.setState({symbol: ''});
    },
    handleChange: function(event) {
        this.setState({symbol: event.target.value});
    },
    render: function () {
        return (
            <div className="row">
                <p>Available stocks for demo: MCD, BA, BAC, LLY, GM, GE, UAL, WMT, AAL, JPM</p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Comma separated list of stocks to watch..." value={this.state.symbol} onChange={this.handleChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.watchStock}>
                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Watch
                        </button>
                    </span>
                </div>
            </div>
        );
    }
});

module.exports = WatchStock