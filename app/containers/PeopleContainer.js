import {connect} from 'react-redux';
import People from '../components/People';
import {fetchAllPeople} from '../actions/Actions';

const mapStateToProps = (state, props) =>{
    return {
        data: state.rootReducer.getSWCharacterInfo.currentSWData,
        loading: state.rootReducer.getSWCharacterInfo.requestInProgress
    }
}

const actions = {
    fetchAllPeople
}

export default connect(mapStateToProps, actions)(People)