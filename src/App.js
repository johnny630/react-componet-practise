import React, { useState} from "react";
import "./style.css";

import Wrapper from './componets/Helpers/Wrapper';
import AddUser from './componets/Users/AddUser';
import UsersList from './componets/Users/UsersList'

export default function App() {
  const [usersList, userUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    userUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Wrapper>
  );
}
