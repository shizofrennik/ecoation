import React, {Component} from 'react';
import {Root} from 'native-base';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Toast} from 'native-base';

class AppContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.toast !== nextProps.toast) {
      let {message, type} = nextProps.toast;
      Toast.show({
        text: message,
        position: 'top',
        type: type ? type : undefined
      });
    }
  }

  render() {
    let {children} = this.props;
    return (
      <Root>
        {children}
      </Root>
    );
  }
}


const mapStateToProps = (state) => ({
  toast: state.app.toast
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
