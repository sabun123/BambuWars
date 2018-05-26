import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import NavBar from '../components/NavBar';

const mapStateToProps = (state, props) => {
    return {
    }
}

const actions = {

}

// We utilize withRouter here to ensure that NavBar has access to react-routers history
export default withRouter(connect(mapStateToProps, actions)(NavBar))