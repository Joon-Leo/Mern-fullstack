import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Joon",
      image: "https://i.pravatar.cc/150?img=1",
      placeCount: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
