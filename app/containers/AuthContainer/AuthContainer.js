import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../redux/actions/auth'
import SignIn from '../../components/auth/SignIn';

const mapStateToProps = (state) => ({
  token: state.auth.token
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);