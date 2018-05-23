import { connect } from 'react-redux';
import Home from '../components/Home';

// Push variables from state into props
const mapStateToProps = (state, props) => {
    return {
        started: state.started
    }
}

// Push actions into props
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

// Finally pass the state vars and actions through props to the actual component
export default connect(mapStateToProps,mapDispatchToProps)(Home)