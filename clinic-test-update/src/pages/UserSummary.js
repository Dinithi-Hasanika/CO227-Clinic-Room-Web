import React from "react";

const UserSummary = ({ userDatas }) => {
  return (
    <div>
      <span>{userDatas.userName}</span>
    </div>
  );
};

export default UserSummary;
