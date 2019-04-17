const initState = {
  userData: [
    {
      userName: "dinni123",
      email: "dinithiliyanage.95@gmail.com",
      membership: 1
    },
    {
      userName: "desh123",
      email: "deshangunarathne.95@gmail.com",
      membership: 3
    }
  ]
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("user account created", action.userDatas);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default userReducer;
