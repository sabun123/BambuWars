import { connect } from 'react-redux';
import People from '../components/People';
import { fetchAllPeople, fetchPersonDetails } from '../actions/Actions';

const mapStateToProps = (state, props) => {
    return {
        data: state.rootReducer.getSWCharacterInfo.currentSWData,
        loading: state.rootReducer.getSWCharacterInfo.requestInProgress,
        loadingStatus:  state.rootReducer.getSWCharacterInfo.loadingStatus,
        personData: state.rootReducer.getSWCharacterInfo.personData,
        loadingDetails: state.rootReducer.getSWCharacterInfo.loadingDetails
    }
}

const actions = {
    fetchAllPeople,
    fetchPersonDetails
}

export default connect(mapStateToProps, actions)(People)