import React, {useState} from "react";

import UserTable from "./componentes/UserTable";
import AddUserForm from "./componentes/AddUserForm";

import { v4 as uuidv4 } from 'uuid';


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]



  // state

  const [users, setUsers] = useState(usersData);

  // Agregar Usuario

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, 
      user
    ])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
