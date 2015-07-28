import React from 'react';
import { Link } from 'react-router';

class Info extends React.Component {

    handleClick(e) {

        var myApp = new Framework7();
        var $$ = Dom7;
        var formData = myApp.formToJSON('#my-form');
        console.log(JSON.stringify(formData));
    }

    render() {

        let clickHandler = this.handleClick;

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
                    <form id="my-form" className="list-block">
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Name</div>
                                        <div className="item-input">
                                            <input type="text" placeholder="Your name" name="name" onChange={(e) => this.handleClick(e)}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">E-mail</div>
                                        <div className="item-input">
                                            <input type="email" placeholder="E-mail" name="email" onChange={(e) => this.handleClick(e)}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Gender</div>
                                        <div className="item-input">
                                            <select name="sex" onChange={(e) => this.handleClick(e)}>
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
                                            <input type="date" placeholder="Birth day" defaultValue="2014-04-30" name="date" onChange={(e) => this.handleClick(e)}/>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Date time</div>
                                        <div className="item-input">
                                            <input type="datetime-local" name="dateTime" onChange={(e) => this.handleClick(e)}/>
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
                                                <input id="12345" type="checkbox" name="exCheck" onChange={(e) => this.handleClick(e)}/>
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
                                                <input type="range" name="slider" min="0" max="100" defaultValue="50" step="0.1" onChange={(e) => this.handleClick(e)}/>
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
                                            <textarea name="textarea" onChange={(e) => this.handleClick(e)}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }

}

export default Info;