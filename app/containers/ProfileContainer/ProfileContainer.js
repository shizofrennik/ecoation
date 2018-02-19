import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../redux/actions/auth'
import Profile from '../../components/home/Profile';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);