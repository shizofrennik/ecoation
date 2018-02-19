import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGreenHouseData} from '../../redux/actions/greenhouse'
import GreenHouse from '../../components/home/GreenHouse';

const mapStateToProps = (state) => ({
  greenhouse: state.greenhouse.greenhouse
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getGreenHouseData
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GreenHouse);