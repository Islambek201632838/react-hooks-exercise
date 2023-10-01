import React, { useContext } from 'react';
import { UserProvider, UserInfo, UserContext } from './UserContextFile'

const UserApp = () => {
  return (
    <UserProvider>
      <UserInfo />
      <SomeComponent/>
    </UserProvider>
  );
};

export default UserApp;

const SomeComponent = () => {
  const { updateUser } = useContext(UserContext);

  const handleUpdateUser = () => {
    const users = [{ name: 'Arsen', age: 31 }, { name: 'Ilkham', age: 55 }, 
                   { name: 'Diana', age: 21 }, { name: 'Uldana', age: 8 },
                   { name: 'Umar', age: 87 }, { name: 'Isa', age: 24 }
                  ]
    let index = Math.floor (Math.random() * 5 );
    updateUser(users[index]['name'], users[index]['age']);
  };

  return (
    <div>
      <button onClick={handleUpdateUser}
              style={{fontSize:'30px', padding:'10px'}}
      >Update User</button>
    </div>
  );
};
