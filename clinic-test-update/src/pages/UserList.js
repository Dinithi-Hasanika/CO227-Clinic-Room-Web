import React from "react";

import UserSummary from "./UserSummary";

const UserList = userData => {
  return (
    <div>
      {userData &&
        userData.userData.map(userDatas => {
          return <UserSummary userDatas={userDatas} key={userDatas.userName} />;
        })}
    </div>
  );
};
export default UserList;
