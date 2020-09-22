const actionUserName = () => (dispatch) => {
  setTimeout(
    () => dispatch({ type: 'CHANGE_USER', value: 'Andri Junaedi' }),
    2000,
  );
};

export { actionUserName };
