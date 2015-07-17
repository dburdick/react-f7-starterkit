import React from 'react';
import ItemActions from '../actions/itemActions';
var mui = require('material-ui'),
    Snackbar = mui.Snackbar;

class ItemList extends React.Component {

    constructor() {
    }

    render() {
        var error = '';
        if (this.props.error)
            error = (<div className="content-block-title">{this.props.error}</div>);

        var detail = '';
        if (this.props.showDetailItem)
            detail = (<div className="content-block-title">Show detail: {this.props.showDetailItem.title}</div>);

        let items = this.props.items.map((item) => {
            var backgroundStyle = item.posters && item.posters.thumbnail ? {
                background: "url('" + item.posters.thumbnail + "') center right 5% no-repeat",
                minHeight: 100
            } : {  };
            var boundClick = function () {
                if (item) ItemActions.showItemDetail(item);
            };

            return (
                <div key={ item.id } className="card">
                    <div className="card-header">{ item.title }</div>
                    <div className="card-content">
                        <div className="card-content-inner" style={backgroundStyle}>{item.year} - {item.mpaa_rating}</div>
                    </div>
                    <div className="card-footer">
                        <a className="button" onClick={boundClick}>
                            Show Details
                        </a>
                    </div>
                </div>
            );
        });
        let loading = this.props.loading ? <div className="content-block-title">Loading...</div> : '';

        return (
            <div>
            { error }
            { detail }
            { loading }
            <div className="content-block-title">Movies</div>
            { items }
            </div>
        );
    }

}

ItemList.contextTypes = {
    muiTheme: React.PropTypes.object
};

var styles = {

};

ItemList.propTypes = {
    loading: React.PropTypes.bool,
    items: React.PropTypes.array,
    error: React.PropTypes.string,
    showDetailItem: React.PropTypes.object
};

export default ItemList;

