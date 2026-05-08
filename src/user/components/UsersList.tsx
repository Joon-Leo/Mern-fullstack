import React from "react";

import "./UsersList.css";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

export type User = {
  id: string;
  image: string;
  name: string;
  placeCount: number;
};

export interface UserListProps {
  items: User[];
}

const UsersList = ({ items }: UserListProps) => {
  if (items.length === 0) {
    return (
      <Card>
        <h2>No users found.</h2>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.placeCount}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
