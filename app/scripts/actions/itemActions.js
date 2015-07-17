import Reflux from 'reflux';


var ItemActions = Reflux.createActions([
    'loadItems',
    'loadItemsSuccess',
    'loadItemsError',
    'showItemDetail'
]);

ItemActions.loadItems.preEmit = function (data) {
    // fetch call example
    let url = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
    fetch(url)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            ItemActions.loadItemsSuccess(json.movies)
        }).catch(function(ex) {
            ItemActions.loadItemsError(ex)
        })
};

export default ItemActions;