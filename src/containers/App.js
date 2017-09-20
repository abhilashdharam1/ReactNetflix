import React, {PropTypes} from 'react';
import '../stylesheets/style.css';
import {Grid} from 'react-bootstrap';
import List from '../components/List';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData,remove,add} from '../actions/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
    }

    componentWillMount() {
        this.props.loadData();
    }
    removeFromList(item) {
        this.props.removeFromState(item);
    }
    addToList(item) {
        this.props.addToState(item);
    }
    render() {
        if (!this.props.myFavoriteList && !this.props.recommendationsToBeShown) return null;
        return (
          <Grid fluid>
            <List backgroundColor="black" data = {this.props.myFavoriteList} button = "Remove" header = "My Favorite List" onClick = {(title) => {this.removeFromList(title)}} message="Please add some recommendations" tooltip ="Removes from My List"/>
            <List backgroundColor="black" data = { this.props.recommendationsToBeShown} button = "Add" header = "You may also be interested in" onClick = {(title) => {this.addToList(title)}} message ="No recommendations to show" tooltip="Adds to My Favorites"/>
          </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        myFavoriteList: state.reducer.myFavoriteList,
        recommendationsToBeShown: state.reducer.recommendationsToBeShown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: bindActionCreators(loadData, dispatch),
        removeFromState: bindActionCreators(remove, dispatch),
        addToState: bindActionCreators(add, dispatch)
    }
}

App.propTypes = {
    myFavoriteList: PropTypes.array,
    recommendationsToBeShown: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
