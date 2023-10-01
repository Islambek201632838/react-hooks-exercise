import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: '', age: 0 });

  const updateUser = (name, age) => {
    setUserData({ name, age });
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};


const UserInfo = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{fontSize:'30px'}}>
      <h2>User Info</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export { UserProvider, UserInfo, UserContext };
