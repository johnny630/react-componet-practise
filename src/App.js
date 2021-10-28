import React from "react";
import "./style.css";

import AddUser from './componets/Users/AddUser';
import UsersList from './componets/Users/UsersList'

export default function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]}/>
    </div>
  );
}
