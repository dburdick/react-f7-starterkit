import React, { cloneElement } from 'react/addons';
import { RouteHandler } from 'react-router';
import { Link } from 'react-router';
import Header from '../components/header.jsx'
import Toolbar from '../components/toolbar.jsx'
var { CSSTransitionGroup } = React.addons;

class App extends React.Component {

    componentDidMount(prevProps, prevState) {
        var myApp = new Framework7();
        var $$ = Dom7;
        var mainView = myApp.addView('.view-main', {
            dynamicNavbar: true
        });
    }

    render() {
        var currentRouteName = this.props.location;

        // get transition name from store
        let transitionName = "exampleLeft";
        if (this.state && this.state.transitionDirection && this.state.transitionDirection === "left")
            transitionName = "example";
        transitionName = currentRouteName === "/home" ? "example" : "exampleLeft";

        return (
            <div className="views">
                <div className="view view-main">
                    < Header />
                    <div className="pages navbar-through toolbar-through">
                        <CSSTransitionGroup transitionName={transitionName} transitionEnter={true} transitionLeave={true} component="div">
                            <RouteHandler key={currentRouteName}/>
                        </CSSTransitionGroup>
                    </div>
                    < Toolbar />
                </div>
            </div>
        );
    }
}

export default App;
