const mapStateToProps = (state = {}) => {
  const reducer = state.appReducer;
  return {
    username: reducer.username,
    password: reducer.password
  };
}

export default mapStateToProps;