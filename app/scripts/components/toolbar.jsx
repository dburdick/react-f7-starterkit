import React from 'react';
import { Link } from 'react-router';

class Toolbar extends React.Component {

    constructor(props, context) {
        super(props);
    }

    showActionSheet() {
        var myApp = new Framework7();

        var $$ = Dom7;

        var buttons1 = [
            {
                text: 'Share',
                label: true,
                onClick: function () {
                    console.log('share clicked');
                }
            },
            {
                text: 'Mail',
                onClick: function () {
                    console.log('mail clicked');
                }
            },
            {
                text: 'Messages',
                onClick: function () {
                    console.log('messages clicked');
                }
            }
        ];
        var buttons2 = [
            {
                text: 'Social share',
                label: true,
                onClick: function () {
                    console.log('social clicked');
                }
            },
            {
                text: 'Facebook',
                onClick: function () {
                    console.log('facebook clicked');
                }
            },
            {
                text: 'Twitter',
                onClick: function () {
                    console.log('twitter clicked');
                }
            }
        ];
        var buttons3 = [
            {
                text: 'Cancel',
                color: 'red'
            }
        ];
        var groups = [buttons1, buttons2, buttons3];
        myApp.actions(groups);
    }

    render() {
        return (
            <div className="toolbar">
                <div className="toolbar-inner">
                    <a className="link" onClick={this.showActionSheet}>Action Sheet</a>
                </div>
            </div>
        );
    }

}

export default Toolbar;