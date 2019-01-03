import { connect } from "react-redux";

import changeCurrentCat from '../actions'

import Nav from '../components/Nav'

const mapStateToProps = state => ({
    currentCat: state.feed.currentCat
})

const mapDispatchToProps = dispatch => ({
    changeCurrentCat: cat => dispatch(changeCurrentCat(cat))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);