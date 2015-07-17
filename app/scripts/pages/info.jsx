import React from 'react';
import { Link } from 'react-router';

class Info extends React.Component {

    componentDidUpdate(prevProps, prevState) {
//// Initialize app
//        var myApp = new Framework7();
//
//// If we need to use custom DOM library, let's save it to $$ variable:
//        var $$ = Dom7;
//
//// Add view
//        var mainView = myApp.addView('.view-main', {
//            // Because we want to use dynamic navbar, we need to enable it for this view:
//            dynamicNavbar: true
//        });

    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div className="content-block">
                        <p className="buttons-row">
                            <Link to="home" className="button">Home</Link>
                            <Link to="info" className="button active">Info</Link>
                        </p>
                    </div>

                    <div className="content-block-title">Full Layout</div>
                    <div className="list-block">
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Name</div>
                                        <div className="item-input">
                                            <input type="text" placeholder="Your name"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">E-mail</div>
                                        <div className="item-input">
                                            <input type="email" placeholder="E-mail"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Gender</div>
                                        <div className="item-input">
                                            <select>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Birth date</div>
                                        <div className="item-input">
                                            <input type="date" placeholder="Birth day" defaultValue="2014-04-30"/>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Date time</div>
                                        <div className="item-input">
                                            <input type="datetime-local"/>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Switch</div>
                                        <div className="item-input">
                                            <label className="label-switch" id="1234">
                                                <input id="12345" type="checkbox"/>
                                                <div className="checkbox"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Slider</div>
                                        <div className="item-input">
                                            <div className="range-slider">
                                                <input type="range" min="0" max="100" defaultValue="50" step="0.1" onChange={ (e) => console.log(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="align-top">
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Textarea</div>
                                        <div className="item-input">
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Info;