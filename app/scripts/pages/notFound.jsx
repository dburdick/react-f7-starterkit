import React from 'react';

class NotFound extends React.Component {

    render() {
        return (
        <div className="page">
            <div className="page-content">
                <div className="content-block">
                    <h1>404!</h1>
                    Route not found :/
                </div>
            </div>
        </div>
        );
    }

}

export default NotFound;