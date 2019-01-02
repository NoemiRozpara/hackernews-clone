import { connect } from "react-redux";

import Feed from '../components/Feed'

import getFeed from '../actions'

const mapStateToProps = state => ({
    stories: state.feed.stories,
    error: state.feed.error,
    loading: state.feed.loading
});

const mapDispatchToProps = dispatch => ({
    getFeed: category => dispatch(getFeed(category))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);