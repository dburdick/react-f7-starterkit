import React from 'react';
import { RouteHandler } from 'react-router';
import { Link } from 'react-router';
import Header from '../components/header.jsx'
var mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {


    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    componentDidUpdate(prevProps, prevState) {
        var myApp = new Framework7();
        var $$ = Dom7;
        var mainView = myApp.addView('.view-main', {
            dynamicNavbar: true,
            domCache: true //enable inline pages
        });
    }

    render() {
        return (
            <div className="views">
                <div className="view view-main">
                    < Header />
                    <div className="pages navbar-through toolbar-through">
                        <RouteHandler/>
                    </div>
                    <div className="toolbar">
                        <div className="toolbar-inner">
                            <Link to="home" className="link">Home</Link>
                            <Link to="info" className="link">Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;