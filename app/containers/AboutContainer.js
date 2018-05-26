import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import About from '../components/About';

const mapStateToProps = (state, props) => {
    return {

    }
}

const actions = {

}

export default withRouter(connect(mapStateToProps,actions)(About));