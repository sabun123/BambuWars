import { connect } from 'react-redux';
import Home from '../components/Home';

// Push variables from state into props
const mapStateToProps = (state, props) => {
    return {
        started: state.rootReducer.getSWCharacterInfo.started,
        data: state.rootReducer.getSWCharacterInfo.currentSWData
    }
}

const actions = {
}

// Finally pass the state vars and actions through props to the actual component
export default connect(mapStateToProps,actions)(Home)