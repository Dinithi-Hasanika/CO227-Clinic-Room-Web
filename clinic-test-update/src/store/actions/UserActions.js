export const signUpForm = userDatas => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("userData")
      .add({
        ...userDatas
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", userDatas });
      })
      .catch(error => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};
