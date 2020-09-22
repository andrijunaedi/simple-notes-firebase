import firebase from '../../firebase';

const actionUserName = () => (dispatch) => {
  setTimeout(
    () => dispatch({ type: 'CHANGE_USER', value: 'Andri Junaedi' }),
    2000,
  );
};

const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });
  return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((respon) => {
      console.log(respon);
      dispatch({ type: 'CHANGE_LOADING', value: false });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: 'CHANGE_LOADING', value: false });
    });
};

export { actionUserName, registerUserAPI };
