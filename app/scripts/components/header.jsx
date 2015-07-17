import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    constructor(props, context) {
        super(props);
    }

    render() {
        return (
            <!-- Top Navbar-->
            <div className="navbar">

                <!-- Navbar page 1 -->
                <div className="navbar-inner">
                    <div className="center sliding">Fresh Tomatoes</div>
                </div>

                <!-- Navbar page 2 -->
                <div className="navbar-inner cached" data-page="detailsPage">
                    <div className="left sliding">
                        <a href="index" className="link back">
                            <i className="icon icon-back"></i>
                            <span>Back</span>
                        </a>
                    </div>


                    <div className="center sliding">Movie info</div>

                </div>

            </div>
        );
    }

}

Header.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Header;