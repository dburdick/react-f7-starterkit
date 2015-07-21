import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import { Link } from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false
        };
    }

    componentDidMount() {
        this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
        ItemActions.loadItems();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onStatusChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div>
                        <div className="content-block">
                            <p className="buttons-row">
                                <Link to="home" className="button active">Home</Link>
                                <Link to="info" className="button">Info</Link>
                            </p>
                        </div>
                        <ItemList { ...this.state } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

