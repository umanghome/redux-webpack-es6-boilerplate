import * as actions from './actions';

const mapDispatchToProps = dispatch => ({
  setUsername: username => {
    dispatch(actions.setUsername(username));
  },
  setPassword: password => {
    dispatch(actions.setPassword(password));
  },
  setToken: token => {
    dispatch(actions.setToken(token));
  }
})

export default mapDispatchToProps;